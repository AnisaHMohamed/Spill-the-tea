-- Drop and Recreate Users table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,  
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP, 
  updated_at TIMESTAMP
);