-- Drop and Recreate Users table

  DELETE FROM relationships;
  DELETE FROM tweets;
  DELETE FROM users;
  TRUNCATE TABLE users RESTART IDENTITY Cascade;
  INSERT INTO users (
  name,
  username,  
  email,
  created_at  
  )
  VALUES 
  (
    'Anisa Mohamed',
    'anisaM',
    'anisam@gmail.com',
    NOW()
  ), 
  (
    'Elon Musk',
    'emusk',
    'elonm@gmail.com',
    NOW()
  ),  
  (
    'Nora Jones',
    'noraj',
    'noraj@gmail.com',
     NOW()
  )
  ,  
  (
    'Tazz Jamaaa',
    'Tazzj',
    'tazzj@gmail.com',
     NOW()
  )
  
