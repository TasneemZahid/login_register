require('dotenv').config()
const express = require('express');
const { register, verify, login, social, logout } = require('./controller');
const app = express();
const passport = require('passport');
const expressSession = require('express-session')
require('./passport-setup');
var cookieParser = require('cookie-parser');
var cors = require("cors");
app.use(cors(
    {
      origin: 'http://localhost:3000',
      credentials: true,
    }
  ));
  
  app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

app.use(cookieParser());
const PORT = 4000;


app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.post('/register', register)
app.post('/verify', verify)
app.post('/login', login)
app.get('/social', social)
app.post('/logout', logout)

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});