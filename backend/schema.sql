CREATE TABLE client (
  id serial PRIMARY KEY NOT NULL,
  name text NOT NULL
);

CREATE TABLE form (
  id serial PRIMARY KEY NOT NULL,
  config jsonb NOT NULL
);

CREATE TABLE client_form (
  id serial PRIMARY KEY NOT NULL,
  client_id integer REFERENCES client,
  form_id integer REFERENCES form
);

CREATE TABLE "session" (
  id serial PRIMARY KEY NOT NULL,
  client_form_id integer REFERENCES client_form
);

CREATE TABLE answer (
  id serial PRIMARY KEY NOT NULL,
  session_id integer REFERENCES "session",
  answers jsonb NOT NULL
);

