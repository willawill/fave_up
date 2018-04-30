DROP DATABASE IF EXISTS faves;
CREATE DATABASE faves;

\c faves;

CREATE TABLE faves (
  ID SERIAL,
  event_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  created_at timestamp without time zone NOT NULL,
  PRIMARY KEY(event_id, user_id)
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  memeber_id INTEGER NOT NULL,
  created_at timestamp without time zone NOT NULL,
  updated_at timestamp without time zone NOT NULL
);

INSERT INTO users (memeber_id, created_at, updated_at) VALUES (1, current_timestamp, current_timestamp);