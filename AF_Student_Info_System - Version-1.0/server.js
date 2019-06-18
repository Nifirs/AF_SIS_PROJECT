var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;

const resRoute = express.Router();
let ticket_reservation = require("./models/Reservation");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const mongoURI = "mongodb://localhost:27017/AF_PROJECT";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

var Users = require("./routes/Users");
var sampathRoute = require("./routes/sampathRoute");
var dialogRoute = require("./routes/dialogRoute");
var govRoute = require("./routes/govRoute");

resRoute.route("/").get(function(req, res) {
  ticket_reservation.find(function(err, mernloginreg) {
    if (err) {
      console.log(err);
    } else {
      res.json(mernloginreg);
    }
  });
});

resRoute.route("/:tr_id").get(function(req, res) {
  let id = req.params.tr_id;
  ticket_reservation.findById(id, function(err, resv) {
    res.json(resv);
  });
});

resRoute.route("/add").post(function(req, res) {
  let res1 = new ticket_reservation(req.body);
  res1
    .save()
    .then(res1 => {
      res.status(200).json({ res1: "reservation added successfully" });
    })
    .catch(err => {
      res, status(400).send("adding fail");
    });
});

resRoute.route("/update/:tr_id").post(function(req, res) {
  ticket_reservation.findById(req.params.tr_id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else res1.status = req.body.status;
    res1.trainName = req.body.trainName;
    res1.amount = req.body.amount;
    res1.classes = req.body.classes;
    res1.payment = req.body.payment;
    res1.email = req.body.email;

    res1
      .save()
      .then(res1 => {
        res.json("reservation updated");
      })
      .catch(err => {
        res.status(400).send("Impossible update");
      });
  });
});

resRoute.route("/delete/:tr_id").get(function(req, res) {
  ticket_reservation.findById(req.params.tr_id, function(err, res1) {
    if (!res1) res.status(404).send("data not found");
    else
      res1
        .delete()
        .then(res1 => {
          res.json("reservation deleted");
        })
        .catch(err => {
          res.status(400).send("Impossible to delete");
        });
  });
});

//Routing Files are imported
app.use("/users", Users);
app.use("/accounts", sampathRoute);
app.use("/mobiles", dialogRoute);
app.use("/govemployee", govRoute);

//No need to import resRoute it is located here not an external Route File
app.use("/reservation", resRoute);

//Common---> var app=express()
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
