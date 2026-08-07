-- FunX Universe — Phase 3 cleanup (DESTRUCTIVE)
-- Run this ONLY after confirming everything in phase3-schema.sql works:
--   - admin.html logs in and Products/Accounts/Manage Staff all work
--   - a staff account with only one module assigned genuinely can't reach
--     the others (both in the UI and via a direct Supabase call)
--   - audit_log is recording product changes and role changes correctly
--
-- This drops the old admin_users table and its supporting objects, which
-- have been fully superseded by profiles.role / profiles.permissions.
-- There is no undo once this runs — that's the entire reason it's a
-- separate file instead of being bundled into phase3-schema.sql.

-- Policies (and the table itself) must go BEFORE the function they
-- reference, or Postgres refuses with "other objects depend on it".
drop policy if exists "admin_users_read_own_row" on public.admin_users;
drop policy if exists "admin_users_managers_read_all" on public.admin_users;
drop policy if exists "admin_users_managers_update" on public.admin_users;

drop table if exists public.admin_users;

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_admin_user();
drop function if exists public.is_admin_with(text);
