-- Drop and recreate relationships table
  DELETE FROM relationships;
  INSERT INTO relationships (
   follower_id, following_id,created_at
  )
  VALUES 
     (
    1,
    4,
  NOW()
  ),  (
    1,
    3,
  NOW()
  )
  ,  (
    1,
    3,
  NOW()
  ),
  (
    2,
    3,
  NOW()
  ),  (
    3,
    1,
  NOW()
  )
  ,  (
    4,
    3,
  NOW()
  )