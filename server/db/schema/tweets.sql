-- Drop and Recreate tweets table
DROP TABLE IF EXISTS tweets CASCADE;
CREATE TABLE tweets (
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP, 
  updated_at TIMESTAMP
);