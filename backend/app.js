require("dotenv").config();


const express = require("express");
const app = express();

const flash = require("express-flash");
const session = require("express-session");

app.use(
  session({
    secret: "secr3t",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());



const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const passport = require("passport");
require("./src/config/passport");
require("./src/config/google");
 

const EventService = require("./src/event");
const UserService = require("./src/user");


const mongoose = require("mongoose");
const { addGoogleUser } = require("./src/user");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (error) => {
    if (error) console.log(error);
  }
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((e) => {
    console.log('Error', e.message);
  });


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));


app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile", (req, res) => {
  res.send("profile stub");
});


app.post("/api/events", EventService.addEvent);
app.get("/api/events", EventService.getEvents);
app.get("/api/events/filter", EventService.getEventsByEventType);
app.get("/api/event/name", EventService.getEventByName);


app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
    failureFlash: true,
    successFlash: "Successfully logged in!",
  })
);



app.listen(3000, function () {
  console.log("Server listening on port 3000");
});