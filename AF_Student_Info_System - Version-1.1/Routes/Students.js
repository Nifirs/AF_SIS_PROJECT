const express = require("express");
const students = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/Student");
students.use(cors());

process.env.SECRET_KEY = "secret";

students.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

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

students.post("/login", (req, res) => {
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

students.get("/profile", (req, res) => {
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


students.route("/").get(function(req, res) {
  User.find(function(err, AF_PROJECT) {
    if (err) {
      console.log(err);
    } else {
      res.json(AF_PROJECT);
    }
  });
});

students.route("/:id").get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, resv) {
    res.json(resv);
  });
});

// students.route("/add").post(function(req, res) {

//   let res1 = new User(req.body);
//   res1
//     .save()
//     .then(res1 => {
//       res.status(200).json({ res1: "Student added successfully" });
//     })
//     .catch(err => {
//       res, status(400).send("adding fail");
//     });
// });

students.route("/update/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else res1.first_name = req.body.first_name;
    res1.last_name = req.body.last_name;
    res1.email = req.body.email;
    res1.password = req.body.password;

    res1
      .save()
      .then(res1 => {
        res.json("Student updated");
      })
      .catch(err => {
        res.status(400).send("Impossible to update");
      });
  });
});
students.route("/delete/:id").get(function(req, res) {
  User.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else
      res1
        .delete()
        .then(res1 => {
          res.json("Course deleted");
        })
        .catch(err => {
          res.status(400).send("Impossible to delete");
        });
  });
});

module.exports = students;
