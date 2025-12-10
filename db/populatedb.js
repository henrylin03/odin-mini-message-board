#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 280 ) NOT NULL,
  username VARCHAR ( 32 ) NOT NULL,
  added_date_time TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO messages (text, username) 
VALUES
  ('Hello, from Henry', 'HenryLin03'),
  ('This is working', 'NeonTestUser');
`;
