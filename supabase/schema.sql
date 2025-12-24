-- Profiles
create table if not exists public.profiles (
  id uuid references auth.users primary key,
  email text unique not null,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.profiles enable row level security;

create policy "Allow users to read own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Allow users to update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Subscriptions
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text check (type in ('Champion', 'Fokus')) not null,
  status text check (status in ('active', 'canceled')) not null default 'active',
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscriptions" on public.subscriptions
  for select using (auth.uid() = user_id);

-- Shipments
create table if not exists public.shipments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  season text not null,
  tracking_number text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.shipments enable row level security;

create policy "Users can view own shipments" on public.shipments
  for select using (auth.uid() = user_id);
