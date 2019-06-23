import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Addassign from "./components/uploadassign";
import Download from "./components/download";
import { Link, Switch } from "react-router-dom";
import courses from "./components/courses";
import Addcourses from "./components/Addcourse";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Exam from "./components/viewexam";
import View from "./pages/view";
import logo1 from "../src/components/ee.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <Navbar />
        <img
          src={logo1}
          className="App-logo1"
          alt="logo"
          style={{ width: "1300px", height: "300px" }}
        />

        <br />
        <h3 style={{ color: "white", backgroundColor: "grey" }}>
          Welcome to TechGang CourseWeb
          <br />
        </h3>
        <div align="center" style={{color:"white"}}>
          <header>
            <Router>
              <br />
              <br />
              <Link to="Addcourses">Create Exam</Link>&nbsp; <label>| </label>
              &nbsp;
              <Link to={"/Exam"}> View Exam List</Link>&nbsp; <label>| </label>
              &nbsp;
              <Link to="Download">Download </Link>&nbsp; <label>| </label>&nbsp;
              <Route exact path="/Addcourses" component={Addcourses} />
              <Route exact path="/courses" component={courses} />
              <Route exact path="/Edit/:id" component={Edit} />
              <Route exact path="/Delete/:id" component={Delete} />
              <Route exact path="/Exam" component={Exam} />
              <Route exact path="/Addassign" component={Addassign} />
              <Route exact path="/Download" component={Download} />
              <Route exact path="/View" component={View} />
            </Router>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
