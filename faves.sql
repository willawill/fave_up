DROP DATABASE IF EXISTS faves;
CREATE DATABASE faves;

\c faves;

CREATE TABLE faves (
  ID SERIAL PRIMARY KEY,
  event_id INTEGER,
  user_id INTEGER,
  created_at timestamp without time zone NOT NULL
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  memeber_id INTEGER,
  created_at timestamp without time zone NOT NULL,
  updated_at timestamp without time zone NOT NULL
);

INSERT INTO users (memeber_id, created_at, updated_at) VALUES (1, current_timestamp, current_timestamp);