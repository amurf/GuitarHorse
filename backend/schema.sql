CREATE TABLE client (
  id serial PRIMARY KEY NOT NULL,
  name text NOT NULL
);

INSERT INTO client (name) values ('stratdat');

CREATE TABLE form (
  id serial PRIMARY KEY NOT NULL,
  client_id integer references client,
  config jsonb NOT NULL
);

CREATE TABLE "session" (
  id serial PRIMARY KEY NOT NULL,
  form_id integer REFERENCES form
);

CREATE TABLE answer (
  id serial PRIMARY KEY NOT NULL,
  session_id integer REFERENCES "session",
  answers jsonb
);

