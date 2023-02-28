const express = require('express')
const { create } = require('express-handlebars');
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const router = require("./routes/routes");
const path = require("path");
const Users = require('./models/Users');
require('dotenv').config();
require('./database/db');

const app = express()

app.use(
   session({
       secret: process.env.SESSIONSECRET,
       resave: false,
       saveUninitialized: false,
   })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(
   (user, done) => done(null, { id: user._id, name: user.nombre }) //se guardará en req.user
);

passport.deserializeUser(async (user, done) => {
   const userDB = await Users.findById(user.id).exec();
   return done(null, { id: userDB._id, name: userDB.nombre }); //se guardará en req.user
});

const hbs = create({
   extname: ".hbs",
   partialsDir: ["views/components"]
});

console.log('JS BackEnd')

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;