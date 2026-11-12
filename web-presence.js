// Live activity for the web player (new file).
//  - Player pages (web.html): once unlocked, report "in menu" / which minigame / which co-op room
//    to the server every few seconds (RPC report_presence).
//  - Admin page (admin.html): show a "Live players" panel with everyone's current activity
//    (RPC get_web_presence, which needs the admin password).
// Only the device ID and the minigame name are sent. Run the "Live players" block of web-config.sql once.
(function () {
  'use strict';
  var ADMIN = !!window.WEB_ADMIN;
  var HB_MS = 10000;          // player heartbeat (also sent immediately when the activity changes)
  var POLL_MS = 5000;         // admin refresh
  var ONLINE_S = 25;          // no heartbeat for this long = offline

  function db() { return window.__hackingWebDB || null; }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // ======================= player side =======================
  function playerSide() {
    var lastSig = '', lastSent = 0, busy = false;
    function deviceId() { try { return localStorage.getItem('user_name'); } catch (e) { return null; } }
    function snapshot() {
      var ui = window.__hackingWebUI, a = ui && ui.activity && ui.activity();
      if (document.hidden) return { kind: 'away', game: a ? a.title : '', info: '' };
      if (!a) return { kind: 'menu', game: '', info: '' };
      return { kind: a.kind, game: a.title || '', info: a.info || '' };
    }
    async function tick() {
      var d = db(), id = deviceId();
      if (!d || !id || window.__hackingWebLocked) { lastSig = ''; return; }   // only approved/unlocked pages report
      var s = snapshot(), sig = [s.kind, s.game, s.info].join('|'), now = Date.now();
      if (sig === lastSig && now - lastSent < HB_MS) return;
      if (busy) return;
      busy = true; lastSig = sig; lastSent = now;                               // set first so a failing server is retried only every HB_MS
      try { await d.rpc('report_presence', { p_device: id, p_kind: s.kind, p_game: s.game, p_info: s.info }); } catch (e) { /* ignore */ }
      busy = false;
    }
    setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
  }

  // ======================= admin side =======================
  function adminSide() {
    var panel, list, count, note, timer = 0, open = true;

    function ago(s) {
      if (s < 5) return 'just now';
      if (s < 60) return s + 's';
      var m = Math.floor(s / 60);
      return m < 60 ? m + 'm' : Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
    }
    function describe(r) {
      var g = r.game || 'a minigame';
      if (r.kind === 'solo') return { label: 'Playing ' + g, cls: 'play' };
      if (r.kind === 'coop') return { label: 'Co-op test: ' + g + ' (alone)', cls: 'play' };
      if (r.kind === 'online') return { label: 'Co-op: ' + g + (r.info ? ' \u00b7 ' + r.info : ''), cls: 'play' };
      if (r.kind === 'away') return { label: 'Tab in background' + (r.game ? ' (' + r.game + ')' : ''), cls: 'away' };
      return { label: 'In the menu', cls: 'menu' };
    }
    function build() {
      var wrap = document.querySelector('#web-menu .wrap'); if (!wrap) return;
      panel = mk('section'); panel.id = 'web-presence';
      var head = mk('div', 'ph');
      var title = mk('b', '', 'Live players'); count = mk('span', 'cnt', '');
      var toggle = mk('button', '', 'Hide'), refresh = mk('button', '', 'Refresh');
      toggle.type = refresh.type = 'button';
      toggle.onclick = function () { open = !open; list.hidden = !open; toggle.textContent = open ? 'Hide' : 'Show'; };
      refresh.onclick = load;
      head.appendChild(title); head.appendChild(count); head.appendChild(refresh); head.appendChild(toggle);
      list = mk('div', 'plist'); note = mk('div', 'pnote', 'Waiting for admin unlock...');
      panel.appendChild(head); panel.appendChild(note); panel.appendChild(list);
      wrap.insertBefore(panel, wrap.querySelector('.bar'));
    }
    function render(rows) {
      list.textContent = '';
      var on = rows.filter(function (r) { return r.age_s <= ONLINE_S; });
      var playing = on.filter(function (r) { return r.kind === 'solo' || r.kind === 'coop' || r.kind === 'online'; });
      count.textContent = on.length + ' online \u00b7 ' + playing.length + ' playing';
      note.textContent = rows.length ? '' : 'Nobody has been active in the last 10 minutes.';
      // playing first, then menu, then away, then offline
      var rank = function (r) { return r.age_s > ONLINE_S ? 3 : r.kind === 'away' ? 2 : r.kind === 'menu' ? 1 : 0; };
      rows.slice().sort(function (a, b) { return rank(a) - rank(b) || a.age_s - b.age_s; }).forEach(function (r) {
        var off = r.age_s > ONLINE_S, d = describe(r), row = mk('div', 'prow ' + (off ? 'off' : d.cls));
        row.appendChild(mk('span', 'dot'));
        row.appendChild(mk('span', 'dev', r.device));
        row.appendChild(mk('span', 'act', off ? 'Offline' : d.label));
        row.appendChild(mk('span', 'when', off ? 'seen ' + ago(r.age_s) + ' ago' : (r.kind === 'menu' || r.kind === 'away' ? '' : 'for ' + ago(r.since_s))));
        list.appendChild(row);
      });
    }
    async function load() {
      var d = db(); if (!d || window.__hackingWebLocked || !panel) return;
      var pw = null; try { pw = sessionStorage.getItem('hackingWebAdminPw'); } catch (e) {}
      if (!pw) return;
      try {
        var r = await d.rpc('get_web_presence', { p_secret: pw });
        if (r.error) {
          var m = (r.error.message || '') + '';
          note.textContent = /does not exist|could not find|schema cache/i.test(m) ? 'Not set up yet: run the "Live players" block at the end of web-config.sql in the Supabase SQL editor.' : /wrong password/i.test(m) ? 'Wrong admin password.' : 'Could not load players: ' + m;
          return;
        }
        render(r.data || []);
      } catch (e) { note.textContent = 'Cannot reach the server.'; }
    }
    document.addEventListener('DOMContentLoaded', function () {
      build();
      timer = setInterval(load, POLL_MS);
      load();
    });
    window.addEventListener('hacking-web-db', load);
  }

  if (ADMIN) adminSide(); else playerSide();
})();
