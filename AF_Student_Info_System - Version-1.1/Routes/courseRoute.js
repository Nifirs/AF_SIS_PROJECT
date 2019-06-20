const cors = require("cors");
const express = require("express");

const courseRoute1 = express.Router();
courseRoute1.use(cors());
let instructor_course = require("../models/Course");

courseRoute1.route("/").get(function(req, res) {
  instructor_course.find(function(err, AF_PROJECT) {
    if (err) {
      console.log(err);
    } else {
      res.json(AF_PROJECT);
    }
  });
});

courseRoute1.route("/:id").get(function(req, res) {
  let id = req.params.id;
  instructor_course.findById(id, function(err, resv) {
    res.json(resv);
  });
});

courseRoute1.route("/add").post(function(req, res) {
  let res1 = new instructor_course(req.body);
  res1
    .save()
    .then(res1 => {
      res.status(200).json({ res1: "Course added successfully" });
    })
    .catch(err => {
      res, status(400).send("adding fail");
    });
});

courseRoute1.route("/update/:id").post(function(req, res) {
  instructor_course.findById(req.params.id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else res1.course_name = req.body.course_name;
    res1.instructor_name = req.body.instructor_name;
    res1.instructor_email = req.body.instructor_email;

    res1
      .save()
      .then(res1 => {
        res.json("Course updated");
      })
      .catch(err => {
        res.status(400).send("Impossible to update");
      });
  });
});
courseRoute1.route("/delete/:id").get(function(req, res) {
  instructor_course.findById(req.params.id, function(err, res1) {
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

module.exports = courseRoute1;
