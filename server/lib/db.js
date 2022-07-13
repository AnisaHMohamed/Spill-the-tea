//Database Connection for setup
import {} from 'dotenv/config'

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
import pkg from 'pg';
 const { Pool } = pkg;

 let dbParams = {
    port: process.env['DB_PORT'],
    user: process.env['DB_USER'],
    password: process.env['DB_PASS'],
    database: process.env['DB_NAME'],
  };

//database connection
const db = new Pool(dbParams);
db.connect();

export const getTweets = () => {
return db.query(
  `SELECT * FROM tweets;`,
  )
};

export const deleteTweets = (user_id, tweet_id) => {
  return db.query(
    `
    DELETE FROM
      tweets
    WHERE
      user_id = $1
    AND
      id = $2
    `,
    [user_id, tweet_id])
  };

export const getTweetsForUser = (id) => {
  return db.query(
    `SELECT * FROM tweets WHERE user_id = $1;`,[id]
  )
 };
 export const createNewTweet = (content, user_id) => {
  return db.query(
    ` INSERT INTO tweets (
      content, user_id,created_at
     ) VALUES 
     (
    '$1',
    '$2',
  NOW()
  )`,[content,user_id]
  
  )
 }

 export const getFollowersForUser = (id) => {
  return db.query(
    `SELECT users.* FROM relationships join users on following_id = users.id  WHERE follower_id = $1;`,[id]
  )
 };

 export const unFollowerUser = (user_id, id_to_unfollow) => {
  return db.query(
    `
    DELETE FROM
    relationships
  WHERE
    follower_id = $1
  AND
    following_id = $2;`,[user_id, id_to_unfollow]
  )
 };

 export const followerUser = (user_id, id_to_follow) => {
  return db.query(
      ` INSERT INTO relationships (
        follower_id, following_id,created_at
       ) VALUES 
       (
      '$1',
      '$2',
    NOW()
    )`,[user_id,id_to_follow]
  )
 };
