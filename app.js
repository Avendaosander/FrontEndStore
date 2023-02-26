const express = require('express')
const { create } = require('express-handlebars');
// const cookieSession = require("cookie-session");
// const config = require("./config.js");
const router = require("./routes/routes");
const path = require("path");
require('dotenv').config();
require('./database/db');

const app = express()

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
// app.set('trust proxy', 1) 
// app.use(
//     cookieSession({
//         name: "backend-login-cookie",
//         secret: config.SECRET,
//         httpOnly: true,
//         keys: ['key1','key2']
//     })
// );

app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;