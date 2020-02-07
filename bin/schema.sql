DROP TABLE IF EXISTS public.queens;
DROP TABLE IF EXISTS public.todos;
DROP TABLE IF EXISTS public.inspections;
DROP TABLE IF EXISTS public.harvests;
DROP TABLE IF EXISTS public.product_types;
DROP TABLE IF EXISTS public.unit_types;
DROP TABLE IF EXISTS public.hives;
DROP TABLE IF EXISTS public.yard_environments;
DROP TABLE IF EXISTS public.yards;
DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS public.addresses;
DROP TABLE IF EXISTS public.environment_types;

CREATE TABLE public.addresses (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    street text,
    city text,
    zip_code text,
    gps_location point
);

CREATE TABLE public.users (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text,
    born date,
    email text,
    active BOOLEAN NOT NULL DEFAULT 'f',
    address_id integer REFERENCES addresses(id) ON DELETE SET NULL
);

CREATE TABLE public.yards (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name text DEFAULT 'Yard ' || SUBSTRING(md5(random()::text),1,8),
    address_id integer REFERENCES addresses(id) ON DELETE SET NULL
);

CREATE TABLE public.environment_types (
    key text PRIMARY KEY NOT NULL -- urban, agricultural, natural
);

CREATE TABLE public.yard_environments (
    yard_id integer NOT NULL REFERENCES yards(id) ON DELETE CASCADE,
    environment_key text NOT NULL REFERENCES environment_types(key) ON UPDATE CASCADE
);

CREATE TABLE public.hives (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    yard_id integer NOT NULL REFERENCES yards(id) ON DELETE CASCADE,
    active BOOLEAN NOT NULL DEFAULT 't',
    created date DEFAULT now() NOT NULL,
    note text
);

CREATE TABLE public.product_types (
    key text PRIMARY KEY NOT NULL -- urban, agricultural, natural
);

CREATE TABLE public.unit_types (
    key text PRIMARY KEY NOT NULL -- mg, kg, cm3, ml, l ...
);

CREATE TABLE public.harvests (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    hive_id integer REFERENCES hives(id) ON DELETE CASCADE,
    date date DEFAULT now() NOT NULL,
    product_key text NOT NULL REFERENCES product_types(key) ON UPDATE CASCADE,
    quantity integer,
    unit_code text NOT NULL REFERENCES unit_types(key) ON UPDATE CASCADE,
    note text
);

CREATE TABLE public.todos (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    hive_id integer REFERENCES hives(id) ON DELETE CASCADE,
    inserted timestamp with time zone DEFAULT now() NOT NULL,
    due timestamp with time zone,
    title text NOT NULL,
    description text,
    completed BOOLEAN NOT NULL DEFAULT 'f'
);

CREATE TABLE public.inspections (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    hive_id integer REFERENCES hives(id) ON DELETE CASCADE,
    date date DEFAULT now() NOT NULL,
    sighted text,
    strength smallint NOT NULL, --0:critical 1:weak 2:healthy 3:strong
    temper smallint NOT NULL, --0:angry 1:nervous 2:calm
    population smallint NOT NULL, --0:low 1:moderate 2:heavy
    queen_cells BOOLEAN NOT NULL DEFAULT 'f', --nejaké matečníky?
    laying_pattern smallint NOT NULL, --znáška 0:poor|spotty 1:mediocre 2:beautiful|solid|uniform
    scent smallint NOT NULL, --zápach 0:foul|hnijúci 1:fermented|kvasený 2:normal
    equipment_condition smallint NOT NULL, -- 0:damaged 1:poor 2:fair 3:good
    hive_condition text, -- rework to checkboxes m:n condition types: Brace Comb, Excessive Propolis, Dead Bees, moisture, mold..
    foundation_type text, -- separate table? Wired Wax, Plastic Frames, Drone Cell, Plasticell, Foundationless
    diseases text,
    treatments text,
    note text
);

CREATE TABLE public.queens (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    hive_id integer REFERENCES hives(id) ON DELETE CASCADE,
    breed text,
    marked BOOLEAN DEFAULT 'f',
    color text,
    accepted BOOLEAN,
    installed date,
    born date,
    died date,
    removed date,
    name text,
    note text
);
