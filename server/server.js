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
import {getTweets, getEmail,createUser} from  './lib/db.js'



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
   //POST Register
    const email = request.body.email;
    const password = request.body.password;
    const salt = bcrypt.genSaltSync(10); // take the salt, multiply 2 by itself salt times
    const hashedPassword = bcrypt.hashSync(password, salt);
    if (email === "" || password === "") {
      response.status(400).json({ message: "Missing email or password" });
      return;
    }
    getEmail(request.body.email).then(data => {
      console.log({ data });
      const user = data.rows[0];
      if (user) {
        return response.status(400).json({ message: "Email already registered" });
      } else {
       
          createUser(
            request.body.name,
            request.body.address,
            request.body.phone,
            request.body.email,
            hashedPassword,
            request.body.type,
            lat,
            lng
            ).then(data => {
              const newUser = data.rows[0];
              // eslint-disable-next-line camelcase
              request.session.user_id = newUser.id;
              response.json({ user: newUser });
              return true;
            }).catch(function(error) {
            console.log({ error });
            response.status(500).json({ error });
          });
        }
      });
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