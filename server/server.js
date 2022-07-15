import express from "express"
const app = express();
const PORT = process.env.PORT || 8080;
import bodyParser from "body-parser";
import morgan from "morgan"
import cors from "cors"
import bcrypt from "bcrypt"
import cookieSession from "cookie-session"
import {getTweets, getEmail,createUser, login} from  './lib/db.js'



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
  app.post("/register", (request, response) => {
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
            request.body.username,
            request.body.email,
            hashedPassword,
            ).then(data => {
              const newUser = data.rows[0];
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
  app.post("/login", (request, response) => {
      // check if user exists in database
      login(request.body.email)
      .then(data => {
        const user = data.rows[0];
        if (!user) {
          //error component
          return response.status(403).json({ message: "Email cannot be found" });
        }
        // if password doesn't match
        if (!bcrypt.compareSync(request.body.password, user.password)) {
          return response.status(403).json({ message: "Wrong password" });
        }
        request.session.user_id = user.id
        console.log({ login: user })
        // if everything is good send response
        response.json({ user });
      })
      .catch(err => {
        // render login with error
        response.status(500).json({ error: err.message });
      });
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