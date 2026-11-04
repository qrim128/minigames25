// Online co-op for the web player (new file; the original game files are untouched).
//
// Co-op minigames normally need a game server. The bundle ships that server logic
// client-side (it is what the "play by myself" mode runs), so one player's browser acts as
// the host: it runs the game, and every player (host included) sees ONE panel through the
// bundle's normal co-op client. Players find each other with a room code over Supabase
// Realtime "broadcast" channels (no tables needed). Messages:
//   guest -> host : join {cid} | act {cid,id,action} | leave {cid}
//   host -> guests: msg {to, kind, data}   kind = startCoop | coopUpdate | coopEnd | hb | full
(function () {
  'use strict';

  var ALPHA = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  var HB_MS = 3000, HB_TIMEOUT_MS = 12000, JOIN_TRIES = 6;
  var cid = 'c' + Math.random().toString(36).slice(2, 10);
  var room = null;
  var modal = null;

  // ---- access to the bundle's co-op engine (globals of script.js) ----
  function engine() {
    try { return { wN: wN, kN: kN, hm: hm, ma: ma }; } catch (e) { return null; }
  }
  function db() { return window.__hackingWebDB || null; }
  function post(action, data) { window.postMessage({ action: action, data: data }, '*'); }
  function ui() { return window.__hackingWebUI; }

  // ---- realtime channel ----
  function openChannel(code, onMsg) {
    return new Promise(function (resolve, reject) {
      var ch = db().channel('hacking-room-' + code, { config: { broadcast: { self: false } } });
      ['join', 'act', 'leave', 'msg'].forEach(function (ev) {
        ch.on('broadcast', { event: ev }, function (m) { onMsg(ev, (m && m.payload) || {}); });
      });
      var done = false;
      ch.subscribe(function (status) {
        if (done) return;
        if (status === 'SUBSCRIBED') { done = true; resolve(ch); }
        else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') { done = true; reject(new Error('Could not connect to the room service (' + status + ')')); }
      });
    });
  }
  function bsend(event, payload) {
    if (room && room.ch) { try { room.ch.send({ type: 'broadcast', event: event, payload: payload }); } catch (e) {} }
  }

  // ======================= HOST =======================
  function newCode() { var s = ''; for (var i = 0; i < 5; i++) s += ALPHA[Math.floor(Math.random() * ALPHA.length)]; return s; }
  function startData(seat) { return { id: room.id, game: room.game, seat: seat, role: room.sim.roles[seat - 1] }; }
  function updData(seat, started) {
    var remaining = started ? Math.max(0, room.deadline - performance.now()) : room.sim.timeLimit;
    return { id: room.id, seq: room.seq, view: room.views[seat - 1], started: started, ready: room.cids.length, players: room.n, remainingMs: Math.round(remaining) };
  }
  function toSeat(seat, kind, data) {
    if (seat === 1) post(kind, data);
    else bsend('msg', { to: room.cids[seat - 1], kind: kind, data: data });
  }
  function broadcastUpdates() {
    room.seq++;
    for (var s = 1; s <= room.cids.length; s++) toSeat(s, 'coopUpdate', updData(s, room.started));
    setInfo();
  }
  function setInfo() {
    if (!room || !ui()) return;
    ui().setInfo('Room ' + room.code + ' · ' + room.cids.length + '/' + room.n + (room.started ? ' playing' : ' joined'), room.code);
  }

  async function host(g, n) {
    var E = engine(); if (!E) throw new Error('This game bundle is not compatible with online play.');
    if (!db()) throw new Error('Not connected to the server yet. Wait a moment and try again.');
    var id = (Date.now() % 1e9) + Math.floor(Math.random() * 1000);
    var sim = E.wN(id, g.id, (ui().overrides ? ui().overrides(g) : {}), n); // {} unless the admin saved custom settings
    if (!sim || !sim.ok) throw new Error((sim && sim.error) || 'Could not create the game.');
    var code = newCode();
    var r = { role: 'host', code: code, id: id, game: g.id, title: g.title, n: n, sim: sim, views: sim.views, cids: [cid], seq: 0, started: false, ended: false, timers: [], E: E };
    room = r;
    try { r.ch = await openChannel(code, hostOnMsg); } catch (e) { room = null; throw e; }
    ui().enter(g.title, function () { leave(); });
    post('startCoop', startData(1));
    broadcastUpdates();
    r.timers.push(setInterval(function () { bsend('msg', { to: '*', kind: 'hb' }); }, HB_MS));
  }

  function hostOnMsg(ev, p) {
    if (!room || room.role !== 'host' || room.ended) return;
    if (ev === 'join') {
      var seat = room.cids.indexOf(p.cid) + 1;
      if (!seat) {
        if (room.started || room.cids.length >= room.n) return bsend('msg', { to: p.cid, kind: 'full' });
        room.cids.push(p.cid); seat = room.cids.length;
      }
      bsend('msg', { to: p.cid, kind: 'startCoop', data: startData(seat) });
      broadcastUpdates();
      if (room.cids.length === room.n && !room.started) hostStart();
    } else if (ev === 'act') {
      var s = room.cids.indexOf(p.cid) + 1;
      if (s > 0 && p.id === room.id) applyAction(s, p.action);
    } else if (ev === 'leave') {
      if (room.cids.indexOf(p.cid) >= 0) finish(false, 'error', 'A player left the room');
    }
  }
  function hostStart() {
    var limit = room.sim.timeLimit;
    room.started = true; room.deadline = performance.now() + limit;
    room.timers.push(setTimeout(function () { finish(false, 'time'); }, limit));
    broadcastUpdates();
  }
  function applyAction(seat, action) {
    if (!room || room.role !== 'host' || !room.started || room.ended) return;
    var res = room.E.kN(room.id, seat, action);
    if (!res || !res.changed || !res.views) return;
    room.views = res.views;
    broadcastUpdates();
    if (res.outcome) finish(res.outcome === 'win', res.reason, res.why);
  }
  function finish(success, reason, why) {
    if (!room || room.role !== 'host' || room.ended) return;
    room.ended = true; room.result = success;
    clearTimers();
    try { room.E.hm(room.id); } catch (e) {}
    var data = { id: room.id, success: success, reason: reason, why: why };
    for (var s = 1; s <= room.cids.length; s++) toSeat(s, 'coopEnd', data);
  }

  // ======================= GUEST =======================
  function join(code) {
    if (!db()) return Promise.reject(new Error('Not connected to the server yet. Wait a moment and try again.'));
    code = (code || '').trim().toUpperCase();
    if (code.length < 4) return Promise.reject(new Error('Enter the room code.'));
    var r = { role: 'guest', code: code, ended: false, timers: [], lastHb: performance.now() };
    room = r;
    return new Promise(function (resolve, reject) {
      var settled = false, tries = 0;
      var fail = function (m) { if (settled) return; settled = true; teardown(); reject(new Error(m)); };
      var ok = function () { if (settled) return; settled = true; resolve(); };
      openChannel(code, function (ev, p) {
        if (ev !== 'msg' || (p.to !== cid && p.to !== '*') || room !== r) return;
        if (p.kind === 'hb') r.lastHb = performance.now();
        else if (p.kind === 'full') fail('That room is full or already started.');
        else if (p.kind === 'startCoop') { r.id = p.data.id; r.lastHb = performance.now(); post('startCoop', p.data); ok(); }
        else if (p.kind === 'coopUpdate') post('coopUpdate', p.data);
        else if (p.kind === 'coopEnd') { r.ended = true; r.result = p.data.success; post('coopEnd', p.data); }
      }).then(function (ch) {
        r.ch = ch;
        var t = setInterval(function () {
          if (settled) return clearInterval(t);
          if (++tries > JOIN_TRIES) { clearInterval(t); return fail('Room not found. Check the code with the host.'); }
          bsend('join', { cid: cid });
        }, 1000);
        r.timers.push(t);
        bsend('join', { cid: cid });
      }, function (e) { fail(e.message); });
    }).then(function () {
      ui().enter('Co-op', function () { leave(); });
      ui().setInfo('Room ' + code, code);
      // Host vanished? (no heartbeat)
      r.timers.push(setInterval(function () {
        if (room === r && !r.ended && performance.now() - r.lastHb > HB_TIMEOUT_MS) {
          r.ended = true; r.result = false;
          post('coopEnd', { id: r.id, success: false, reason: 'error', why: 'Lost connection to the host' });
        }
      }, 2000));
    });
  }

  // ======================= shared =======================
  function clearTimers() { if (room) { room.timers.forEach(function (t) { clearInterval(t); clearTimeout(t); }); room.timers = []; } }
  function teardown() {
    var r = room; if (!r) return;
    room = null;
    r.timers.forEach(function (t) { clearInterval(t); clearTimeout(t); });
    if (r.role === 'host' && !r.ended) { try { r.E.hm(r.id); } catch (e) {} }
    if (r.ch) setTimeout(function () { try { db().removeChannel(r.ch); } catch (e) {} }, 800);
  }
  // User left (Menu button / Esc): tell the others, close our panel, go back to the menu.
  function leave() {
    var r = room; if (!r) { if (ui()) ui().leave(); return; }
    if (r.role === 'host') finish(false, 'error', 'The host closed the room');
    else if (!r.ended) bsend('leave', { cid: cid });
    if (!r.ended || r.role === 'guest') post('coopEnd', { id: r.id, success: false, reason: 'error', why: 'You left the room' });
    teardown();
    if (ui()) ui().leave();
  }

  // NUI callbacks coming from the bundle (routed by web.js while an online game is active)
  function onNui(name, body) {
    if (!room) { if (name === 'coopLeave' || name === 'coopClosed') ui().leave(); return; }
    if (name === 'coopAction') {
      if (room.role === 'host') applyAction(1, body.action);
      else if (!room.ended) bsend('act', { cid: cid, id: room.id, action: body.action });
    } else if (name === 'coopLeave') {
      leave();
    } else if (name === 'coopClosed') { // result panel finished (auto-closes ~2s after the end)
      var ok = room.result === true;
      if (room.ended) ui().toast('Co-op ' + (ok ? 'success' : 'failed'), ok ? 'ok' : 'fail');
      teardown(); ui().leave();
    }
  }

  // ======================= chooser dialog =======================
  function closeModal() { if (modal) { modal.remove(); modal = null; } }
  function open(g, startLocal) {
    if (window.__hackingWebLocked) return;
    closeModal();
    var E = engine();
    var range = (E && E.ma && E.ma[g.id] && E.ma[g.id].players) || { min: 2, max: 2 };
    var maxP = Math.min(4, range.max), counts = [];
    for (var n = range.min; n <= maxP; n++) counts.push(n);
    var online = !!E && !!db() && room == null;

    modal = document.createElement('div'); modal.id = 'web-coop-modal';
    modal.innerHTML =
      '<div class="box" role="dialog" aria-label="Co-op options">' +
      '<h3></h3><p class="sub">How do you want to play this co-op minigame? (To join a friend, use "Join a friend\'s room" on the main menu.)</p>' +
      '<div class="opt"><b>By myself</b><span class="d">You control every player\'s panel on this screen.</span><div class="row"><button type="button" class="primary" id="cm-solo">Play by myself</button></div></div>' +
      '<div class="opt"><b>Host an online room</b><span class="d">Get a room code and send it to your friends. Each person sees only their own panel.</span>' +
      '<div class="row"><label>Players <select id="cm-n"></select></label><button type="button" id="cm-host">Create room</button></div></div>' +
      '<div class="status" id="cm-status"></div><div class="row close"><button type="button" id="cm-close">Cancel</button></div></div>';
    modal.querySelector('h3').textContent = g.title;
    var sel = modal.querySelector('#cm-n');
    counts.forEach(function (c) { var o = document.createElement('option'); o.value = c; o.textContent = c; sel.appendChild(o); });
    var status = modal.querySelector('#cm-status');
    var say = function (t, bad) { status.textContent = t || ''; status.className = 'status' + (bad ? ' bad' : ''); };
    if (!online) {
      ['cm-n', 'cm-host'].forEach(function (i) { modal.querySelector('#' + i).disabled = true; });
      say(!E ? 'Online play is not available with this game bundle.' : 'Online play needs the server connection (still connecting?).', true);
    }
    var busy = function (b) { ['cm-solo', 'cm-host', 'cm-n'].forEach(function (i) { var e = modal && modal.querySelector('#' + i); if (e) e.disabled = b || (!online && i !== 'cm-solo'); }); };

    modal.querySelector('#cm-solo').onclick = function () { closeModal(); startLocal(); };
    modal.querySelector('#cm-close').onclick = closeModal;
    modal.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    modal.addEventListener('mousedown', function (e) { if (e.target === modal) closeModal(); });
    modal.querySelector('#cm-host').onclick = function () {
      busy(true); say('Creating room...');
      host(g, parseInt(sel.value, 10)).then(closeModal, function (e) { busy(false); say(e.message, true); });
    };
    document.body.appendChild(modal);
    var first = online ? modal.querySelector('#cm-solo') : modal.querySelector('#cm-solo'); first.focus();
  }

  // "Join a friend's room" box on the main menu (needs only the code, no game pick).
  function mountJoin(el) {
    if (!el) return;
    el.innerHTML = '<div class="joinbox"><b>Join a friend\'s room</b><input class="code" maxlength="6" placeholder="CODE" autocomplete="off" aria-label="Room code"><button type="button">Join</button><span class="jstatus" aria-live="polite"></span></div>';
    var input = el.querySelector('input'), btn = el.querySelector('button'), st = el.querySelector('.jstatus');
    var say = function (t, bad) { st.textContent = t || ''; st.className = 'jstatus' + (bad ? ' bad' : ''); };
    var ready = function () { return !!engine() && !!db(); };
    var sync = function () {
      var ok = ready(); input.disabled = !ok; btn.disabled = !ok;
      if (!ok && !st.textContent) say('Connecting...');
      else if (ok && st.textContent === 'Connecting...') say('');
    };
    sync(); window.addEventListener('hacking-web-db', sync);
    var go = function () {
      if (window.__hackingWebLocked) return;
      if (!ready()) return say('Not connected to the server yet. Wait a moment and try again.', true);
      input.disabled = true; btn.disabled = true; say('Joining...');
      join(input.value).then(function () { say(''); input.value = ''; sync(); }, function (e) { sync(); say(e.message, true); });
    };
    btn.onclick = go;
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
  }

  window.HackingCoop = { open: open, onNui: onNui, mountJoin: mountJoin };
})();
