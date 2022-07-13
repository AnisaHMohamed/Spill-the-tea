//Database Connection for setup
import {} from 'dotenv/config'

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
import pkg from 'pg';
 const { Pool } = pkg;

 let dbParams = {
    port: process.env['DB_PORT'],
    user:process.env['DB_USER'],
    password:process.env['DB_PASS'],
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

export const getTweetsForUser = (id) => {
  return db.query(
    `SELECT * FROM tweets WHERE user_id = $1;`,[id]
  )
 };
 export const getFollowersForUser = (id) => {
  return db.query(
    `SELECT following_id FROM relations WHERE follower_id = $1;`,[id]
  )
 };