var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5001;
const path = require("path");

const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

//view engine setup
app.engine("handlebars", exphbs());
app.set("view Engine", "handlebars");

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(cors());

//body-parser as the middleware
app.use(bodyParser.json());
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

//administrator route path=Users
var Users = require("./routes/Users");
var Instructors = require("./Routes/Instructors");
var Students = require("./Routes/Students");
var courseRoute = require("./Routes/courseRoute"); //should import the route "file" name--->courseRoute not courseRoute1(this is exported module name)
var emailRoute = require("./Routes/emailRoute");
var marksNoteRoute = require("./Routes/marksNoteRoute");

//Routing Files are imported
app.use("/users", Users);
app.use("/instructors", Instructors);
app.use("/students", Students);
app.use("/courses", courseRoute);
app.use("/emailmessages", emailRoute);
app.use("/notifys", marksNoteRoute);

//Common---> var app=express()
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

