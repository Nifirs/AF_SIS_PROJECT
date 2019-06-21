const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const path = require("path");
var app = express();

const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

require('dotenv').config();//gmail email and username security

//view engine setup
app.engine("handlebars", exphbs());
app.set("view Engine", "handlebars");

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));


const users = express.Router();
const User = require("../models/User");
users.use(cors());
process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };


  const email=req.body.email
  const output = 
  `<p>Administrator-Registration</p>
  <h3>Registered-Administrator</h3>
  <ul>  
    <li>First Name: ${req.body.first_name}</li>
    <li>Last Name: ${req.body.last_name}</li>
    <li>Your Email: ${req.body.email}</li>
    <li>Your Password: ${req.body.password}</li>

    <li>Message: You are registered as an Administrator now</li>
    <li>Password and Email are given please check it out</li>

  </ul>`
  ;
  var smtpTransport = require('nodemailer-smtp-transport');

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user:"techgang.afsis@gmail.com" , // generated ethereal user
        pass: "techgang@9596"  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  }));

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"TechGang-SIS Course Message" <techgang.afsis@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'AF SIS-PROJECT', // Subject line
      text: 'You are registered as an Administrator', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
           console.log(error);
      }
     

      res.render('contact', {msg:'Email has been sent'});
  });

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + " registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//normal route starts here


users.route("/").get(function(req, res) {
  User.find(function(err, AF_PROJECT) {
    if (err) {
      console.log(err);
    } else {
      res.json(AF_PROJECT);
    }
  });
});

users.route("/:id").get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, resv) {
    res.json(resv);
  });
});


users.route("/update/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else res1.first_name = req.body.first_name;
    res1.last_name = req.body.last_name;
    res1.email = req.body.email;
    res1.password = req.body.password;

    res1
      .save()
      .then(res1 => {
        res.json("Admin updated");
      })
      .catch(err => {
        res.status(400).send("Impossible to update");
      });
  });
});
users.route("/delete/:id").get(function(req, res) {
  User.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else
      res1
        .delete()
        .then(res1 => {
          res.json("Admin deleted");
        })
        .catch(err => {
          res.status(400).send("Impossible to delete");
        });
  });
});


module.exports = users;
