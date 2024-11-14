-- Enable PostGIS for location-based queries
create extension if not exists postgis;

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Enable Full Text Search
create extension if not exists pg_trgm;

-- Bookings Table
create table bookings (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id),
  service_id uuid references services(id),
  location_id uuid references locations(id),
  bedrooms integer not null,
  bathrooms integer not null,
  status text not null check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  scheduled_date timestamp with time zone,
  total_price decimal(10,2) not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Services Table
create table services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  long_description text,
  base_price decimal(10,2) not null,
  duration_minutes integer not null,
  image_url text,
  icon_name text,
  meta_title text,
  meta_description text,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Service Benefits Table
create table service_benefits (
  id uuid primary key default uuid_generate_v4(),
  service_id uuid references services(id) on delete cascade,
  title text not null,
  description text,
  icon_name text,
  display_order integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Locations Table
create table locations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  image_url text,
  meta_title text,
  meta_description text,
  coordinates geometry(Point, 4326),
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews Table
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid references bookings(id),
  service_id uuid references services(id),
  location_id uuid references locations(id),
  author_name text not null,
  author_image text,
  rating integer not null check (rating >= 1 and rating <= 5),
  content text not null,
  is_featured boolean default false,
  is_verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Team Members Table
create table team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  bio text,
  image_url text,
  quote text,
  is_featured boolean default false,
  display_order integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Cleaners Table
create table cleaners (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id),
  first_name text not null,
  last_name text not null,
  mobile text not null,
  email text not null,
  image_url text,
  bio text,
  average_rating decimal(3,2),
  total_cleans integer default 0,
  is_verified boolean default false,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Cleaner Service Areas Table
create table cleaner_service_areas (
  id uuid primary key default uuid_generate_v4(),
  cleaner_id uuid references cleaners(id) on delete cascade,
  location_id uuid references locations(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(cleaner_id, location_id)
);

-- Cleaner Availability Table
create table cleaner_availability (
  id uuid primary key default uuid_generate_v4(),
  cleaner_id uuid references cleaners(id) on delete cascade,
  day_of_week integer not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes
create index bookings_user_id_idx on bookings(user_id);
create index bookings_service_id_idx on bookings(service_id);
create index bookings_location_id_idx on bookings(location_id);
create index services_slug_idx on services(slug);
create index locations_slug_idx on locations(slug);
create index reviews_service_id_idx on reviews(service_id);
create index reviews_location_id_idx on reviews(location_id);
create index cleaners_user_id_idx on cleaners(user_id);

-- Create location-based spatial index
create index locations_coordinates_idx on locations using gist(coordinates);

-- Add full text search indexes
alter table services add column search_vector tsvector
  generated always as (
    setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(long_description, '')), 'C')
  ) stored;

create index services_search_idx on services using gin(search_vector);

-- Triggers for updated_at timestamps
create or replace function trigger_set_timestamp()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger set_timestamp
before update on bookings
for each row
execute procedure trigger_set_timestamp();

create trigger set_timestamp
before update on services
for each row
execute procedure trigger_set_timestamp();

create trigger set_timestamp
before update on locations
for each row
execute procedure trigger_set_timestamp();

create trigger set_timestamp
before update on cleaners
for each row
execute procedure trigger_set_timestamp();