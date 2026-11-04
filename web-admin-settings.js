// Per-minigame settings editor for admin.html (new file; loaded only by the admin page).
// Opens from the sliders icon on each card. Saved values are stored on the server
// (web_config key 'game_settings') and every player's game starts with them, so
// web-games.js never needs editing. Only values that differ from the defaults are stored.
(function () {
  'use strict';
  var modal = null, TIME_KEY = /time|ms$|duration|delay|interval/i;
  // Settings that use a dropdown list instead of free typing: { gameId: { settingKey: [allowed values] } }
  var OPTIONS = {
    cipherdecode: {
      backwards: ['random', 'true', 'false'],
      cipher: ['mixed', 'shift', 'atbash', 'number']
    }
  };

  function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
  function isPrim(v) { return typeof v === 'string' || typeof v === 'number'; }
  function kindOf(v) {
    if (typeof v === 'number') return 'number';
    if (typeof v === 'boolean') return 'bool';
    if (typeof v === 'string') return 'string';
    if (Array.isArray(v) && v.length && v.every(isPrim)) return 'list';
    return 'json';
  }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function show(v) { return kindOf(v) === 'json' ? JSON.stringify(v) : Array.isArray(v) ? v.join(', ') : String(v); }
  function seconds(ms) { var s = ms / 1000; return (s % 1 ? s.toFixed(1) : String(s)) + ' s'; }

  // One editable row per setting. get() returns {value} or {error}.
  function field(key, def, cur, gid) {
    var kind = kindOf(def), row = mk('div', 'row'), input, hint = mk('span', 'unit');
    var opts = kind === 'string' && (OPTIONS[gid] || {})[key];
    var lab = mk('label', 'k', key);
    if (kind === 'bool') { input = mk('input'); input.type = 'checkbox'; input.checked = !!cur; }
    else if (kind === 'json') { input = mk('textarea'); input.rows = 3; input.value = JSON.stringify(cur, null, 2); }
    else if (kind === 'number') { input = mk('input'); input.type = 'number'; input.step = 'any'; input.value = String(cur); }
    else if (opts) {
      input = mk('select');
      (opts.indexOf(String(cur)) < 0 ? opts.concat([String(cur)]) : opts).forEach(function (o) {
        var op = mk('option', '', o); op.value = o; input.appendChild(op);
      });
      input.value = String(cur);
    }
    else { input = mk('input'); input.type = 'text'; input.value = show(cur); }
    input.id = 'ws-' + key; lab.htmlFor = input.id;
    var reset = mk('button', 'undo', '\u21ba'); reset.type = 'button'; reset.title = 'Back to default (' + show(def) + ')';
    var info = mk('div', 'def', 'default: ' + show(def));
    var box = mk('div', 'in'); box.appendChild(input); if (kind === 'number' && TIME_KEY.test(key)) box.appendChild(hint); box.appendChild(reset);
    row.appendChild(lab); row.appendChild(box); row.appendChild(info);

    function get() {
      if (kind === 'bool') return { value: input.checked };
      if (kind === 'string') return { value: input.value };
      if (kind === 'number') {
        var raw = input.value.trim(), n = Number(raw);
        return raw === '' || !isFinite(n) ? { error: 'Enter a number' } : { value: n };
      }
      if (kind === 'list') {
        var parts = input.value.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
        if (!parts.length) return { error: 'Enter at least one value, separated by commas' };
        if (def.every(function (x) { return typeof x === 'number'; })) {
          var nums = parts.map(Number);
          return nums.every(isFinite) ? { value: nums } : { error: 'All values must be numbers' };
        }
        return { value: parts };
      }
      try {
        var v = JSON.parse(input.value);
        if (typeof v !== typeof def || Array.isArray(v) !== Array.isArray(def) || v === null) return { error: 'Must be valid JSON of the same kind as the default' };
        return { value: v };
      } catch (e) { return { error: 'Invalid JSON' }; }
    }
    function set(v) { if (kind === 'bool') input.checked = !!v; else if (kind === 'json') input.value = JSON.stringify(v, null, 2); else input.value = show(v); refresh(); }
    function refresh() {
      var r = get(), bad = !!r.error, changed = !bad && !same(r.value, def);
      row.classList.toggle('chg', changed); row.classList.toggle('bad', bad);
      info.textContent = bad ? r.error : 'default: ' + show(def);
      if (kind === 'number' && TIME_KEY.test(key)) hint.textContent = !bad && Math.abs(r.value) >= 100 ? '= ' + seconds(r.value) : '';
    }
    input.addEventListener('input', refresh); input.addEventListener('change', refresh);
    reset.onclick = function () { set(def); };
    refresh();
    return { key: key, def: def, row: row, input: input, get: get, set: set };
  }

  function close() {
    if (!modal) return;
    document.removeEventListener('keydown', onKey, true);
    modal.remove(); modal = null;
  }
  function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); close(); } }

  async function open(g, kind) {
    if (modal) close();
    // Start from the newest saved values, in case another admin changed them.
    try { if (window.HackingWeb) await window.HackingWeb.reloadSettings(); } catch (e) {}
    var def = g.defaults || {}, keys = Object.keys(def);
    var ov = window.HackingWeb ? window.HackingWeb.overrides(g) : {};
    var fields = keys.map(function (k) { return field(k, def[k], k in ov ? ov[k] : def[k], g.id); });

    modal = mk('div'); modal.id = 'web-set-modal';
    var box = mk('div', 'box'); modal.appendChild(box);
    box.appendChild(mk('h3', '', g.title + ' \u00b7 settings'));
    box.appendChild(mk('p', 'sub', 'Saved to the server: every player\u2019s next game uses these values (within about 15 seconds). Only values that differ from the default are stored.'));
    var list = mk('div', 'fields');
    if (!keys.length) list.appendChild(mk('div', 'none', 'This minigame has no settings.'));
    fields.forEach(function (f) { list.appendChild(f.row); });
    box.appendChild(list);
    if (kind === 'coop') box.appendChild(mk('p', 'note', 'Co-op values are clamped by the game itself to safe ranges (for example lives or stages). Use Test play to check them.'));
    var status = mk('div', 'status');
    box.appendChild(status);
    var acts = mk('div', 'actions');
    var bTest = mk('button', '', 'Test play'), bReset = mk('button', '', 'Reset to defaults'), bCancel = mk('button', '', 'Close'), bSave = mk('button', 'primary', 'Save to server');
    [bTest, bReset, bCancel, bSave].forEach(function (b) { b.type = 'button'; });
    bCancel.className = 'spacer';
    [bTest, bReset, bCancel, bSave].forEach(function (b) { acts.appendChild(b); });
    box.appendChild(acts);
    function say(t, bad) { status.textContent = t || ''; status.className = 'status' + (bad ? ' bad' : ''); }

    function collect() {
      var out = {}, ok = true;
      fields.forEach(function (f) { var r = f.get(); if (r.error) { ok = false; f.input.focus(); } else out[f.key] = r.value; });
      if (!ok) { say('Fix the highlighted settings first.', true); return null; }
      return out;
    }
    bReset.onclick = function () { fields.forEach(function (f) { f.set(f.def); }); say('Back to defaults. Press Save to store this.'); };
    bCancel.onclick = close;
    modal.addEventListener('mousedown', function (e) { if (e.target === modal) close(); });
    bTest.onclick = function () {
      var vals = collect(); if (!vals) return;
      close();
      if (window.HackingWeb) window.HackingWeb.start(g, kind, vals);
    };
    bSave.onclick = async function () {
      var vals = collect(); if (!vals) return;
      var db = window.__hackingWebDB;
      if (!db) return say('Not connected to the server yet. Wait a moment and retry.', true);
      var pw = null; try { pw = sessionStorage.getItem('hackingWebAdminPw'); } catch (e) {}
      if (!pw) { pw = window.prompt('Admin password (the one you set in web-config.sql):'); if (!pw) return say('Cancelled. Nothing was saved.', true); }
      var changed = {};
      Object.keys(vals).forEach(function (k) { if (!same(vals[k], def[k])) changed[k] = vals[k]; });
      bSave.disabled = true; say('Saving...');
      try { await window.HackingWeb.reloadSettings(); } catch (e) {}
      var all = JSON.parse(JSON.stringify(window.WEB_SETTINGS || {}));
      if (Object.keys(changed).length) all[g.id] = changed; else delete all[g.id];
      var r = await db.rpc('set_web_settings', { p_secret: pw, p_settings: all });
      bSave.disabled = false;
      if (r.error) {
        var m = (r.error.message || '') + '';
        if (/wrong password/i.test(m)) { try { sessionStorage.removeItem('hackingWebAdminPw'); } catch (e) {} return say('Wrong password.', true); }
        return say(/does not exist|could not find|schema cache/i.test(m) ? 'Server not set up for settings yet: run the new "set_web_settings" part of web-config.sql in the Supabase SQL editor.' : 'Save failed: ' + m, true);
      }
      try { sessionStorage.setItem('hackingWebAdminPw', pw); } catch (e) {}
      window.WEB_SETTINGS = all;
      if (window.HackingWeb) window.HackingWeb.refresh();
      close();
      if (window.__hackingWebUI) window.__hackingWebUI.toast('Saved settings for ' + g.title, 'ok');
    };

    document.body.appendChild(modal);
    document.addEventListener('keydown', onKey, true);
    var first = box.querySelector('input, textarea'); (first || bCancel).focus();
  }

  window.HackingAdminSettings = { open: open };
})();
