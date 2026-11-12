// Web player shim. Lets the unmodified NUI bundle (script.js) run in a normal browser.
// It plays the role of the FiveM client/server: it sends the same window messages the
// game would receive, and answers the NUI callbacks (endGame, coopPreviewClosed, ...).
(function () {
  var FAKE_HOST = 'hacking-web';
  var nextId = 1;
  var active = null; // { kind: 'solo'|'coop', id, title }

  // Game size. The bundle fits each game to ~94% of window.innerWidth/Height (max 1.6x),
  // which is huge on a desktop browser. We report a smaller inner size to it so it scales
  // itself down consistently; script.js itself is untouched.
  // Solo and co-op games have separate sizes, each remembered.
  var sizes = { solo: 0.6, coop: 0.6 };
  var KEYS = { solo: 'hackingWebSize', coop: 'hackingWebCoopSize' };
  ['solo', 'coop'].forEach(function (k) {
    try { var sv = parseFloat(localStorage.getItem(KEYS[k])); if (sv >= 0.3 && sv <= 1.2) sizes[k] = sv; } catch (e) {}
  });
  function curKind() { return active && (active.kind === 'coop' || active.kind === 'online') ? 'coop' : 'solo'; }
  function scaleKind() { return active && active.kind === 'online' ? 'coop' : 'solo'; } // online = bundle-scaled single panel
  function realW() { return document.documentElement.clientWidth || 1280; }
  function realH() { return document.documentElement.clientHeight || 720; }
  Object.defineProperty(window, 'innerWidth', { configurable: true, get: function () { return Math.round(realW() * sizes[scaleKind()]); } });
  Object.defineProperty(window, 'innerHeight', { configurable: true, get: function () { return Math.round(realH() * sizes[scaleKind()]); } });
  function setSize(v, kind) {
    kind = kind || curKind();
    sizes[kind] = Math.min(1.2, Math.max(0.3, v));
    try { localStorage.setItem(KEYS[kind], String(sizes[kind])); } catch (e) {}
    var r = document.getElementById('web-size-' + kind); if (r) r.value = sizes[kind];
    var l = document.getElementById('web-size-label-' + kind); if (l) l.textContent = Math.round(sizes[kind] * 100) + '%';
    window.dispatchEvent(new Event('resize')); // makes the bundle recompute its (solo) scale live
    if (typeof applyCoop === 'function') applyCoop();
  }

  // Make the bundle believe it is inside FiveM so its NUI callbacks reach our fetch hook.
  window.GetParentResourceName = function () { return FAKE_HOST; };

  var realFetch = window.fetch ? window.fetch.bind(window) : null;
  window.fetch = function (url, opts) {
    if (typeof url === 'string' && url.indexOf('https://' + FAKE_HOST + '/') === 0) {
      var name = url.slice(('https://' + FAKE_HOST + '/').length);
      var body = {};
      try { body = JSON.parse((opts && opts.body) || '{}'); } catch (e) {}
      setTimeout(function () { onNui(name, body); }, 0);
      return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
    }
    return realFetch ? realFetch.apply(window, arguments) : Promise.reject(new Error('fetch unavailable'));
  };

  function send(action, data) {
    window.postMessage({ action: action, data: data }, '*');
  }

  function toast(text, cls) {
    var t = document.getElementById('web-toast');
    if (!t) return;
    t.textContent = text; t.className = cls || ''; t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.hidden = true; }, 2600);
  }

  // When the approval lock re-engages mid-game, stop whatever is running and go back to the menu.
  window.addEventListener('hacking-web-lock', function () {
    if (active) { send(active.kind === 'solo' ? 'abort' : 'closeCoopPreview', {}); showMenu(); }
  });

  function showMenu() {
    active = null;
    document.body.classList.remove('playing');
    var b = document.getElementById('web-back'); if (b) b.remove();
  }

  function onNui(name, body) {
    // Solo game finished or aborted (Esc).
    if (name === 'endGame' && active && active.kind === 'solo') {
      toast(body && body.success ? active.title + ': success' : active.title + ': failed', body && body.success ? 'ok' : 'fail');
      showMenu();
    }
    // Co-op preview closed (Close button / Esc).
    if (name === 'coopPreviewClosed' && active && active.kind === 'coop') {
      showMenu();
    }
    // Online co-op (web-coop.js) handles coopAction / coopLeave / coopClosed.
    if (active && active.kind === 'online' && window.HackingCoop) window.HackingCoop.onNui(name, body);
    // centerCursor, coopReady, etc. need no handling in a browser.
  }

  // ---- Co-op view: all panels, or a single panel you can switch between ----
  var coopView = 'all', coopIdx = 0;
  try { if (localStorage.getItem('hackingWebCoopView') === 'one') coopView = 'one'; } catch (e) {}
  var coopRaf = 0;
  function coopPanels() { return Array.prototype.slice.call(document.querySelectorAll('#root [style*="zoom"]')); }
  function applyCoop() {
    if (!active || active.kind !== 'coop') return;
    var panels = coopPanels(), n = panels.length;
    if (!n) return;
    if (coopIdx >= n) coopIdx = n - 1;
    if (coopIdx < 0) coopIdx = 0;
    var one = coopView === 'one';
    // The bundle zooms co-op panels by a fixed 0.8 (0.6 for 3+ players). Scale that by the size setting.
    var base = one ? 1 : (n > 2 ? 0.6 : 0.8);
    var z = (base * sizes.coop / 0.6).toFixed(3);
    panels.forEach(function (p, i) {
      p.style.setProperty('display', one && i !== coopIdx ? 'none' : '', 'important');
      if (!(one && i !== coopIdx)) p.style.removeProperty('display');
      p.style.setProperty('zoom', z, 'important');
    });
    var lab = document.getElementById('web-coop-label');
    if (lab) {
      var hdr = panels[coopIdx].querySelector('header'); var role = hdr ? hdr.innerText.replace(/\s+/g, ' ').replace(/esc to leave/i, '').replace(new RegExp(active.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '').trim() : '';
      lab.textContent = one ? 'Panel ' + (coopIdx + 1) + '/' + n + (role ? ' \u00b7 ' + role : '') : n + ' panels';
    }
    var bAll = document.getElementById('web-coop-all'), bOne = document.getElementById('web-coop-one');
    if (bAll) bAll.className = one ? '' : 'on'; if (bOne) bOne.className = one ? 'on' : '';
    ['web-coop-prev', 'web-coop-next'].forEach(function (id) { var x = document.getElementById(id); if (x) x.style.display = one ? '' : 'none'; });
  }
  function scheduleCoop() { if (coopRaf) return; coopRaf = requestAnimationFrame(function () { coopRaf = 0; applyCoop(); }); }
  function setCoopView(v) { coopView = v; try { localStorage.setItem('hackingWebCoopView', v); } catch (e) {} applyCoop(); }
  function stepCoop(d) { var n = coopPanels().length || 1; coopIdx = (coopIdx + d + n) % n; applyCoop(); }
  new MutationObserver(scheduleCoop).observe(document.documentElement, { childList: true, subtree: true });

  function addBackButton() {
    if (document.getElementById('web-back')) return;
    var b = document.createElement('button');
    b.textContent = 'Menu (Esc)';
    var mk = function (txt, d) { var x = document.createElement('button'); x.className = 'web-sz'; x.textContent = txt; x.title = 'Game size'; x.onclick = function () { setSize(sizes[curKind()] + d); }; return x; };
    var bar = document.createElement('div'); bar.id = 'web-back';
    if (active && active.kind === 'coop') {
      var cb = function (id, txt, fn, title) { var x = document.createElement('button'); x.id = id; x.textContent = txt; if (title) x.title = title; x.onclick = fn; return x; };
      var lab = document.createElement('span'); lab.id = 'web-coop-label';
      bar.appendChild(cb('web-coop-all', 'All panels', function () { setCoopView('all'); }));
      bar.appendChild(cb('web-coop-one', 'One panel', function () { setCoopView('one'); }));
      bar.appendChild(cb('web-coop-prev', '\u25c0', function () { stepCoop(-1); }, 'Previous panel'));
      bar.appendChild(lab);
      bar.appendChild(cb('web-coop-next', '\u25b6', function () { stepCoop(1); }, 'Next panel'));
    }
    if (active && active.kind === 'online') { var inf = document.createElement('button'); inf.id = 'web-online-info'; inf.type = 'button'; inf.title = 'Click to copy the room code'; inf.textContent = (active.info || '') + ' \u29c9'; inf.onclick = function () { if (active && active.code) copyText(active.code, 'Room code copied: ' + active.code); }; bar.appendChild(inf); }
    bar.appendChild(mk('\u2212', -0.1)); bar.appendChild(mk('+', 0.1)); bar.appendChild(b);
    b.id = 'web-menu-btn';
    b.onclick = function () {
      if (!active) return;
      if (active.kind === 'solo') send('abort', {}); // abort sends no callback, so leave manually
      else if (active.kind === 'online') { if (active.leave) active.leave(); }
      else send('closeCoopPreview', {});
      showMenu();
    };
    document.body.appendChild(bar);
  }

  // Copy text to the clipboard (works on file:// too, via a hidden textarea fallback).
  function copyText(text, okMsg) {
    var done = function () { toast(okMsg || 'Copied', 'ok'); };
    var fallback = function () {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-999px;top:0;opacity:0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
      ta.remove(); if (ok) done(); else toast('Could not copy. Select the code and press Ctrl+C.', 'fail');
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }

  // Small API for web-coop.js (online co-op) to use the same menu / bar / toast.
  window.__hackingWebUI = {
    enter: function (title, onLeave) {
      active = { kind: 'online', title: title, leave: onLeave, info: '' };
      document.body.classList.add('playing');
      addBackButton();
    },
    leave: function () { if (active && active.kind === 'online') showMenu(); },
    setInfo: function (t, code) { if (active && active.kind === 'online') { active.info = t; if (code) active.code = code; var e = document.getElementById('web-online-info'); if (e) e.textContent = t + ' \u29c9'; } },
    copy: copyText,
    toast: toast,
    overrides: overridesFor,
    // Read-only snapshot of what this player is doing (used by web-presence.js).
    activity: function () { return active ? { kind: active.kind, title: active.title, info: active.info || '' } : null; }
  };

  function startSolo(g, settings) {
    if (window.__hackingWebLocked) return;
    active = { kind: 'solo', id: nextId, title: g.title };
    document.body.classList.add('playing');
    addBackButton();
    send('startGame', { id: nextId++, game: g.id, settings: settings || settingsFor(g) });
  }

  function startCoop(g, settings) {
    if (window.__hackingWebLocked) return;
    active = { kind: 'coop', id: nextId, title: g.title }; coopIdx = 0;
    document.body.classList.add('playing');
    addBackButton();
    send('previewCoop', { game: g.id, settings: settings || settingsFor(g) });
  }

  // ---- Per-game settings: web-games.js `defaults`, overridden by what the admin saved (server key 'game_settings') ----
  window.WEB_SETTINGS = window.WEB_SETTINGS || {};
  function cloneJ(v) { return JSON.parse(JSON.stringify(v)); }
  function sameType(a, b) { return typeof a === typeof b && Array.isArray(a) === Array.isArray(b) && (a === null) === (b === null); }
  function overridesFor(g) {
    var o = (window.WEB_SETTINGS || {})[g.id], d = g.defaults || {}, out = {};
    if (o && typeof o === 'object' && !Array.isArray(o)) Object.keys(o).forEach(function (k) { if (k in d && sameType(o[k], d[k])) out[k] = cloneJ(o[k]); });
    return out;
  }
  function settingsFor(g) {
    var s = cloneJ(g.defaults || {}), o = overridesFor(g);
    Object.keys(o).forEach(function (k) { s[k] = o[k]; });
    return s;
  }

  function card(g, kind) {
    var b = document.createElement('button');
    b.className = 'game'; b.type = 'button';
    var t = document.createElement('b'); t.textContent = g.title; b.appendChild(t);
    if (g.hint) { var s = document.createElement('span'); s.textContent = g.hint; b.appendChild(s); }
    if (kind === 'coop') { var tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = '2+ panels, you control all'; b.appendChild(tag); }
    if (ADMIN) {
      var on = isVisible(g), bd = document.createElement('span');
      bd.className = 'tag ' + (on ? 'vis' : 'hid'); bd.textContent = on ? 'Visible to users' : 'Hidden from users';
      b.appendChild(bd); b.setAttribute('data-vis', on ? '1' : '0');
    }
    if (EDIT) {
      b.className += ' pick'; b.setAttribute('data-id', g.id);
      b.onclick = function () { touched = true; picked[g.id] = !picked[g.id]; refreshEdit(); };
    } else {
      b.onclick = function () {
        if (kind !== 'coop') return startSolo(g);
        if (window.HackingCoop) window.HackingCoop.open(g, function () { startCoop(g); }); else startCoop(g);
      };
    }
    if (ADMIN && !EDIT) {
      var wrap = document.createElement('div'); wrap.className = 'gamewrap';
      var cfg = document.createElement('button'); cfg.type = 'button'; cfg.className = 'cfg';
      cfg.title = 'Settings for ' + g.title; cfg.setAttribute('aria-label', 'Settings for ' + g.title);
      cfg.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>';
      if (Object.keys(overridesFor(g)).length) { cfg.className += ' mod'; cfg.title += ' (customised)'; }
      cfg.onclick = function () { if (window.HackingAdminSettings) window.HackingAdminSettings.open(g, kind); };
      wrap.appendChild(b); wrap.appendChild(cfg);
      return wrap;
    }
    return b;
  }

  // ---- Which games are visible: WEB_SHOW_ONLY (if non-empty) wins, otherwise each game's `show` flag ----
  function isVisible(g) {
    var only = window.WEB_SHOW_ONLY;
    if (only && only.length) return only.indexOf(g.id) >= 0;
    return g.show !== false;
  }
  // Owner-only picker: open web.html?edit=1
  var ADMIN = !!window.WEB_ADMIN; // admin.html: list every game, with a Visible/Hidden badge
  var EDIT = false;
  try { EDIT = new URLSearchParams(location.search).get('edit') === '1'; } catch (e) {}
  var picked = null; // id -> bool, only used in edit mode
  function pickedIds() {
    var G0 = window.WEB_GAMES || { solo: [], coop: [] }, out = [];
    (G0.solo || []).concat(G0.coop || []).forEach(function (g) { if (picked[g.id]) out.push(g.id); });
    return out;
  }
  function configText() {
    var G0 = window.WEB_GAMES || { solo: [], coop: [] };
    var total = (G0.solo || []).length + (G0.coop || []).length, ids = pickedIds();
    if (ids.length === total) return 'window.WEB_SHOW_ONLY = [];  // empty = show every game';
    return 'window.WEB_SHOW_ONLY = [' + ids.map(function (i) { return JSON.stringify(i); }).join(', ') + '];';
  }
  function refreshEdit() {
    var t = document.getElementById('web-edit-out'); if (t) t.value = configText();
    var c = document.getElementById('web-edit-count'); if (c) c.textContent = pickedIds().length + ' selected';
    Array.prototype.forEach.call(document.querySelectorAll('#web-menu button.game.pick'), function (b) {
      b.classList.toggle('picked', !!picked[b.getAttribute('data-id')]);
    });
  }

  function render(filter) {
    var root = document.getElementById('web-menu');
    var G0 = window.WEB_GAMES || { solo: [], coop: [] };
    var vis = (EDIT || ADMIN) ? function () { return true; } : isVisible; // edit mode lists every game
    var G = { solo: (G0.solo || []).filter(vis), coop: (G0.coop || []).filter(vis) };
    var q = (filter || '').toLowerCase();
    var af = ADMIN ? ((document.getElementById('web-admin-filter') || {}).value || 'all') : 'all';
    var match = function (g) { if (af === 'vis' && !isVisible(g)) return false; if (af === 'hid' && isVisible(g)) return false; return !q || g.title.toLowerCase().indexOf(q) >= 0 || g.id.indexOf(q) >= 0; };
    var list = root.querySelector('.lists');
    // The "Join a friend's room" box lives under the Co-op minigames heading. Park it outside the list before clearing so it survives re-renders.
    var joinSlot = root.querySelector('.joinslot'), coopHead = null;
    if (joinSlot && joinSlot.parentNode === list) list.parentNode.insertBefore(joinSlot, list);
    list.textContent = '';
    var any = false;
    [['Minigames', G.solo, 'solo'], ['Co-op minigames', G.coop, 'coop']].forEach(function (sec) {
      var items = sec[1].filter(match);
      if (!items.length) return;
      any = true;
      var h = document.createElement('h2'); h.textContent = sec[0] + ' (' + items.length + ')'; list.appendChild(h);
      if (sec[2] === 'coop') coopHead = h;
      var grid = document.createElement('div'); grid.className = 'grid';
      items.forEach(function (g) { grid.appendChild(card(g, sec[2])); });
      list.appendChild(grid);
    });
    if (!any) { var e = document.createElement('div'); e.className = 'empty'; e.textContent = 'No games match.'; list.appendChild(e); }
    // Place the join box right under the Co-op minigames heading; if that section is hidden (search/filter), keep it reachable at the end.
    if (joinSlot) { if (coopHead) list.insertBefore(joinSlot, coopHead.nextSibling); else list.appendChild(joinSlot); }
  }

  // ---- Shared config stored in Supabase (table web_config, key 'show_only') ----
  // Lets the owner change the visible games from ?edit=1 with no file editing. If the table or
  // row is missing/unreachable, the list in web-games.js is used instead.
  var touched = false, remoteSeen = false, REMOTE_POLL_MS = 15000;
  function initPicked() {
    var G0 = window.WEB_GAMES || { solo: [], coop: [] };
    picked = {};
    (G0.solo || []).concat(G0.coop || []).forEach(function (g) { picked[g.id] = isVisible(g); });
  }
  function curFilter() { var s = document.getElementById('web-search'); return s ? s.value : ''; }
  function editStatus(t, bad) { var s = document.getElementById('web-edit-status'); if (s) { s.textContent = t; s.style.color = bad ? '#f87171' : '#4ade80'; } }
  async function loadRemoteConfig() {
    var db = window.__hackingWebDB; if (!db) return;
    try {
      var r = await db.from('web_config').select('value').eq('key', 'show_only').maybeSingle();
      if (r.error || !r.data || !Array.isArray(r.data.value)) return;
      var v = r.data.value;
      var changed = !remoteSeen || JSON.stringify(v) !== JSON.stringify(window.WEB_SHOW_ONLY || []);
      remoteSeen = true;
      window.WEB_SHOW_ONLY = v;
      if (changed) {
        render(curFilter());
        if (EDIT) { if (!touched) initPicked(); refreshEdit(); }
      }
    } catch (e) { /* keep the web-games.js list */ }
  }
  async function loadRemoteSettings() {
    var db = window.__hackingWebDB; if (!db) return;
    try {
      var r = await db.from('web_config').select('value').eq('key', 'game_settings').maybeSingle();
      var v = r && r.data && r.data.value;
      if (r.error || !v || typeof v !== 'object' || Array.isArray(v)) return;
      var changed = JSON.stringify(v) !== JSON.stringify(window.WEB_SETTINGS || {});
      window.WEB_SETTINGS = v;
      if (changed && ADMIN) render(curFilter()); // refresh the "customised" marks
    } catch (e) { /* keep the web-games.js defaults */ }
  }
  var remoteTimer = 0;
  function startRemote() { if (remoteTimer || !window.__hackingWebDB) return; loadRemoteConfig(); loadRemoteSettings(); remoteTimer = setInterval(function () { loadRemoteConfig(); loadRemoteSettings(); }, REMOTE_POLL_MS); }
  // Used by web-admin-settings.js (admin.html only).
  window.HackingWeb = {
    start: function (g, kind, settings) { if (kind === 'coop') startCoop(g, settings); else startSolo(g, settings); },
    overrides: overridesFor,
    reloadSettings: loadRemoteSettings,
    refresh: function () { render(curFilter()); }
  };
  window.addEventListener('hacking-web-db', startRemote);

  async function saveRemote() {
    var db = window.__hackingWebDB;
    if (!db) return editStatus('Not connected to the server yet. Wait a moment and retry.', true);
    var pw = null; try { pw = sessionStorage.getItem('hackingWebAdminPw'); } catch (e) {}
    if (!pw) { pw = window.prompt('Admin password (the one you set in web-config.sql):'); if (!pw) return editStatus('Cancelled. Nothing was saved.', true); }
    var G0 = window.WEB_GAMES || { solo: [], coop: [] };
    var total = (G0.solo || []).length + (G0.coop || []).length, ids = pickedIds();
    if (ids.length === total) ids = []; // empty = show every game
    editStatus('Saving...');
    var r = await db.rpc('set_web_games', { p_secret: pw, p_ids: ids });
    if (r.error) {
      try { sessionStorage.removeItem('hackingWebAdminPw'); } catch (e) {}
      var m = (r.error.message || '') + '';
      return editStatus(/wrong password/i.test(m) ? 'Wrong password.' : /does not exist|could not find|schema cache/i.test(m) ? 'Server not set up yet: run web-config.sql in the Supabase SQL editor.' : 'Save failed: ' + m, true);
    }
    try { sessionStorage.setItem('hackingWebAdminPw', pw); } catch (e) {}
    window.WEB_SHOW_ONLY = ids; remoteSeen = true; touched = false;
    editStatus('Saved. Every visitor\'s menu updates within ~15 seconds.');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('web-menu');
    root.innerHTML = '<div class="wrap"><h1>' + (ADMIN ? 'HACKING \u00b7 ADMIN' : 'HACKING') + '</h1>' + (ADMIN ? '<p class="sub">Every minigame, including the ones hidden from users. Click any to play it, or use the sliders icon on a card to change that minigame\'s settings. <a href="web.html?edit=1" target="_blank" rel="noopener">Choose which games users see</a></p>' : '') + '<p class="sub">Pick a minigame to play. Esc aborts a game. Co-op games open every player\'s panel side by side so you can play both roles.</p>' +
      '<div class="joinslot"></div><div class="bar"><input type="search" id="web-search" placeholder="Search minigames..." autocomplete="off">' + (ADMIN ? '<select id="web-admin-filter"><option value="all">All games</option><option value="vis">Visible to users</option><option value="hid">Hidden from users</option></select>' : '') + '<label class="size">Minigame size <input type="range" id="web-size-solo" min="0.3" max="1.2" step="0.05"> <span id="web-size-label-solo"></span></label><label class="size">Co-op size <input type="range" id="web-size-coop" min="0.3" max="1.2" step="0.05"> <span id="web-size-label-coop"></span></label></div><div class="lists"></div></div>';
    var af = document.getElementById('web-admin-filter'); if (af) af.addEventListener('change', function () { render(curFilter()); });
    document.getElementById('web-search').addEventListener('input', function (e) { render(e.target.value); if (EDIT) refreshEdit(); });
    if (EDIT) {
      initPicked();
      var tb = document.createElement('div'); tb.className = 'editbar';
      tb.innerHTML = '<b>Choose games</b> <span id="web-edit-count"></span>' +
        '<button type="button" id="web-edit-all">Select all</button><button type="button" id="web-edit-none">Select none</button>' +
        '<button type="button" id="web-edit-save" class="primary">Save to server</button>' +
        '<button type="button" id="web-edit-copy">Copy line (manual)</button>' +
        '<span id="web-edit-status"></span>' +
        '<textarea id="web-edit-out" readonly rows="2"></textarea>' +
        '<div class="hint">Click games to tick/untick them (the search box helps), then press <b>Save to server</b>. Every visitor\'s menu follows automatically, with no file editing. First time? Run <code>web-config.sql</code> once in Supabase. <i>Copy line</i> is only a manual fallback for <code>web-games.js</code>.</div>';
      root.querySelector('.wrap').insertBefore(tb, root.querySelector('.bar'));
      var setAll = function (v) { touched = true; Object.keys(picked).forEach(function (k) { picked[k] = v; }); refreshEdit(); };
      document.getElementById('web-edit-all').onclick = function () { setAll(true); };
      document.getElementById('web-edit-none').onclick = function () { setAll(false); };
      document.getElementById('web-edit-save').onclick = saveRemote;
      document.getElementById('web-edit-copy').onclick = function () {
        var ta = document.getElementById('web-edit-out'), btn = this, done = function () { btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = 'Copy line (manual)'; }, 1400); };
        ta.focus(); ta.select();
        var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
        if (ok) return done();
        if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(done, function () {});
      };
    }
    ['solo', 'coop'].forEach(function (k) {
      var r = document.getElementById('web-size-' + k);
      r.addEventListener('input', function () { setSize(parseFloat(r.value), k); });
      setSize(sizes[k], k);
    });
    render('');
    if (EDIT) refreshEdit();
    startRemote();
    if (!EDIT && window.HackingCoop && window.HackingCoop.mountJoin) window.HackingCoop.mountJoin(root.querySelector('.joinslot'));
  });
})();
