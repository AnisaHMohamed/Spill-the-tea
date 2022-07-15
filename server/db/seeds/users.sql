-- Drop and Recreate Users table

  DELETE FROM relationships;
  DELETE FROM tweets;
  DELETE FROM users;
  TRUNCATE TABLE users RESTART IDENTITY Cascade;
  INSERT INTO users (
  name,
  username,  
  email,
  password,
  created_at  
  )
  VALUES 
  (
    'Anisa Mohamed',
    'anisaM',
    '1234',
    'anisam@gmail.com',
    NOW()
  ), 
  (
    'Elon Musk',
    'emusk',
    '1234',
    'elonm@gmail.com',
    NOW()
  ),  
  (
    'Nora Jones',
    'noraj',
    '1234',
    'noraj@gmail.com',
     NOW()
  )
  ,  
  (
    'Tazz Jamaaa',
    'Tazzj',
    '1234',
    'tazzj@gmail.com',
     NOW()
  )
  
