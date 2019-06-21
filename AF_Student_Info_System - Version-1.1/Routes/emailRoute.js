const cors = require("cors");
const express = require("express");
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



const messageRoute = express.Router();
messageRoute.use(cors());
let Message = require("../models/Message");

messageRoute.route("/").get(function(req, res) {
  Message.find(function(err, AF_PROJECT) {
    if (err) {
      console.log(err);
    } else {
      res.json(AF_PROJECT);
    }
  });
});

messageRoute.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Message.findById(id, function(err, resv) {
    res.json(resv);
  });
});

messageRoute.route("/add").post(function(req, res) {
  const email=req.body.instructor_email
  const output = 
  `<p>You have a new course request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Course Name: ${req.body.course_name}</li>
    <li>Instructor Name: ${req.body.instructor_name}</li>
    <li>Instructor Email: ${req.body.instructor_email}</li>
    <li>Message: ${req.body.message}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`;
  var smtpTransport = require('nodemailer-smtp-transport');

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',

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
      from: '"SIS Course Issue Messages" <techgang.afsis@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'AF SIS-PROJECT', // Subject line
      text: 'You are assigned to a Course', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
           console.log(error);
      }
      // console.log('Message sent: %s', info.messageId);   
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });


  let res1 = new Message(req.body);
  res1
    .save()
    .then(res1 => {
      res.status(200).json({ res1: "message added successfully" });
    })
    .catch(err => {
      res, status(400).send("adding fail");
    });
});

messageRoute.route("/update/:id").post(function(req, res) {
  Message.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else res1.course_name = req.body.course_name;
    res1.instructor_name = req.body.instructor_name;
    res1.instructor_email = req.body.instructor_email;
    res1.message = req.body.message;

    res1
      .save()
      .then(res1 => {
        res.json("message updated");
      })
      .catch(err => {
        res.status(400).send("Impossible to update");
      });
  });
});
messageRoute.route("/delete/:id").get(function(req, res) {
  Message.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else
      res1
        .delete()
        .then(res1 => {
          res.json("message deleted");
        })
        .catch(err => {
          res.status(400).send("Impossible to delete");
        });
  });
});

module.exports = messageRoute;
