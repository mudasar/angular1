var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//our app
var app = express();
//allow json body to be parse
app.use(bodyParser.json());

//enable cors
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type, Authorization');

  next();
});

//model
var user = mongoose.model('User',{
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

// allowed http methods
app.post('/register', function(req, res){

  var user = req.body;
  var newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  });

  newUser.save(function(err){
    res.status(200).json(newUser);
  });
});

mongoose.connect('mongodb://localhost:28017/users');

//start server
app.listen(3000, function(){
  console.log('api listening on 3000');
});
