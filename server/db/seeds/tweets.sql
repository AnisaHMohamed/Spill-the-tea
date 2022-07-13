  DELETE FROM tweets;

  INSERT INTO tweets (
   content, user_id,created_at
  )
  VALUES 
     (
    'My first tweet I love it here',
    1,
  NOW()
  ),  (
    'Not sure if I like it here',
    2,
  NOW()
  ),
  (
    'Wheres the music',
    3,
  NOW()
  ),  (
    '????',
    4,
  NOW()
  )