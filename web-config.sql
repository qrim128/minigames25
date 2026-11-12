-- ONE-TIME SETUP for choosing which minigames are shown (web.html?edit=1 -> "Save to server").
-- Run this whole file in Supabase: SQL Editor -> New query -> paste -> Run.
-- 1) Change 'CHANGE_ME' below to your own admin password FIRST.
-- Visitors can only READ the list. Writing needs the password, checked inside the database.

create table if not exists public.web_config (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.web_config enable row level security;
drop policy if exists "web_config public read" on public.web_config;
create policy "web_config public read" on public.web_config for select using (true);
-- (no insert/update/delete policy on purpose: the public key cannot write directly)

create table if not exists public.web_admin (
  id     int primary key default 1,
  secret text not null
);
alter table public.web_admin enable row level security;   -- no policies = unreadable by the public key
insert into public.web_admin (id, secret) values (1, 'CHANGE_ME') on conflict (id) do nothing;
-- To change the password later:  update public.web_admin set secret = 'new-password' where id = 1;

create or replace function public.set_web_games(p_secret text, p_ids jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from (select secret from public.web_admin where id = 1) then
    raise exception 'wrong password';
  end if;
  if jsonb_typeof(p_ids) is distinct from 'array' then
    raise exception 'ids must be an array';
  end if;
  insert into public.web_config (key, value, updated_at) values ('show_only', p_ids, now())
  on conflict (key) do update set value = excluded.value, updated_at = now();
end;
$$;
revoke all on function public.set_web_games(text, jsonb) from public;
grant execute on function public.set_web_games(text, jsonb) to anon, authenticated;

-- Used by admin.html: checks the admin password on the server (the password itself is never readable).
create or replace function public.check_web_admin(p_secret text)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (select 1 from public.web_admin where id = 1 and secret = p_secret);
$$;
revoke all on function public.check_web_admin(text) from public;
grant execute on function public.check_web_admin(text) to anon, authenticated;
-- Tip: use a long password; the public key can attempt guesses against these two functions.

-- ============================================================================
-- ADDED for the per-minigame settings editor on admin.html (sliders icon on each card).
-- If you already ran everything above, run ONLY this block once (it is safe to run again).
-- Visitors can read the saved settings; writing needs the admin password, checked here.
-- ============================================================================
create or replace function public.set_web_settings(p_secret text, p_settings jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from (select secret from public.web_admin where id = 1) then
    raise exception 'wrong password';
  end if;
  if jsonb_typeof(p_settings) is distinct from 'object' then
    raise exception 'settings must be an object';
  end if;
  insert into public.web_config (key, value, updated_at) values ('game_settings', p_settings, now())
  on conflict (key) do update set value = excluded.value, updated_at = now();
end;
$$;
revoke all on function public.set_web_settings(text, jsonb) from public;
grant execute on function public.set_web_settings(text, jsonb) to anon, authenticated;

-- ============================================================================
-- ADDED for the "Live players" panel on admin.html (who is in the menu / which minigame).
-- If you already ran everything above, run ONLY this block once (it is safe to run again).
-- Players report their activity through report_presence (only devices you have approved
-- are accepted). Reading the list needs the admin password, checked here.
-- ============================================================================
create table if not exists public.web_presence (
  device     text primary key,
  kind       text not null default 'menu',   -- menu | solo | coop | online | away
  game       text,
  info       text,
  since      timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.web_presence enable row level security;   -- no policies = not readable/writable directly

create or replace function public.report_presence(p_device text, p_kind text, p_game text, p_info text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_device is null or length(p_device) < 3 or length(p_device) > 40 then return; end if;
  -- only approved devices can show up (stops anyone filling the table with fake IDs)
  if not exists (select 1 from public.requests r where r.name = p_device and r.status = 'approved') then return; end if;
  insert into public.web_presence (device, kind, game, info, since, updated_at)
  values (p_device, left(coalesce(p_kind, 'menu'), 16), left(p_game, 80), left(p_info, 80), now(), now())
  on conflict (device) do update set
    since      = case when public.web_presence.kind is distinct from excluded.kind
                        or public.web_presence.game is distinct from excluded.game
                      then now() else public.web_presence.since end,
    kind       = excluded.kind,
    game       = excluded.game,
    info       = excluded.info,
    updated_at = now();
  if random() < 0.02 then delete from public.web_presence where updated_at < now() - interval '1 day'; end if;
end;
$$;
revoke all on function public.report_presence(text, text, text, text) from public;
grant execute on function public.report_presence(text, text, text, text) to anon, authenticated;

create or replace function public.get_web_presence(p_secret text)
returns table (device text, kind text, game text, info text, since_s int, age_s int)
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from (select a.secret from public.web_admin a where a.id = 1) then
    raise exception 'wrong password';
  end if;
  return query
    select p.device, p.kind, p.game, p.info,
           extract(epoch from now() - p.since)::int,
           extract(epoch from now() - p.updated_at)::int
    from public.web_presence p
    where p.updated_at > now() - interval '10 minutes'
    order by p.updated_at desc;
end;
$$;
revoke all on function public.get_web_presence(text) from public;
grant execute on function public.get_web_presence(text) to anon, authenticated;
