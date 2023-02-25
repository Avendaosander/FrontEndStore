const express = require('express')
const { create } = require('express-handlebars');
// const cors = require("cors");
// const cookieSession = require("cookie-session");
const dotenv = require('dotenv').config();
const router = require("./routes/routes");
// const config = require("./config.js");
const path = require("path");

const app = express()

const hbs = create({
   extname: ".hbs",
   partialsDir: ["views/components"]
});

console.log('JS BackEnd')

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// var corsOptions = {
//     origin: process.env.APP_HOST+":"+process.env.APP_PORT
// };

// app.use(cors(corsOptions));
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