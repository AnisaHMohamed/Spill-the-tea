// require("dotenv").config();
//express server
import express from "express"
const app = express();
const PORT = process.env.PORT || 8080;
import bodyParser from "body-parser";
import morgan from "morgan"
import cors from "cors"
// const bcrypt from "bcrypt"
import cookieSession from "cookie-session"
// import Pool  from "pg"
// import dbParams from "./lib/db.js"
// // import axios from "axios"
//  import db from "./lib/db.js"
import {getTweets} from  './lib/db.js'



//database connection
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieSession({
  name: 'session',
  secret: 'Anisa',
  maxAge: 24 * 60 * 60 * 1000 
}));

  //Server PORT
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
// register user
  app.get("/register", (request, response) => {
   
  console.log('register')
  });
  // login user
  app.get("/login", (request, response) => {
   
    console.log('login')
    });
  //get all tweets
  app.get("/tweets", (request, response) => {
    request.session.user_id  = 343
    getTweets()
    .then((data)=>data.rows[0].content)
    .then(tweet=> response.send(tweet)
    )
  });
  //get all tweets
  app.get("/tweets/:id", (request, response) => {
    request.session.user_id  = 343
    getTweets()
    .then((data)=>data.rows[0].content)
    .then(tweet=> response.send(tweet)
    )
  });