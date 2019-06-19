var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;


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

//administrator route path=Users
var Users = require("./routes/Users");
var Instructors=require("./Routes/Instructors");
var Students=require("./Routes/Students")



//Routing Files are imported
app.use("/users", Users);
app.use("/instructors", Instructors);
app.use("/students", Students);





//Common---> var app=express()
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
