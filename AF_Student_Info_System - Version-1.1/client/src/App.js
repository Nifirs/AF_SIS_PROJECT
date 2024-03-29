import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import logo1 from "./images/ee.jpg";

import "bootstrap/dist/css/bootstrap.css";

import ListCoursesComponent from "../src/components/ListCoursesComponent";
import CourseComponent from "../src/components/CourseComponent";

import GeneralRContainer from "./components/GeneralRContainer";
import AdminRContainer from "./components/AdminRContainer";
import InstructorRContainer from "./components/InstructorRContainer";
import StudentRContainer from "./components/StudentRContainer";

import addCourse from "./Services/courseService/addCourse";
import viewCourse from "./Services/courseService/viewCourse";
import updateCourse from "./Services/courseService/updateCourse";

import viewStudent from "./Services/studentService/viewStudent";
import updateStudent from "./Services/studentService/updateStudent";

import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Register from "./components/Register";
import Profile from "./components/Profile";

import StudentProfile from "./components/StudentProfile";
import InstructorProfile from "./components/InstructorProfile";
import StudentLogin from "./components/StudentLogin";
import InstructorLogin from "./components/InstructorLogin";
import StudentRegister from "./components/StudentRegister";
import InstructorRegister from "./components/InstructorRegister";
import AdminRegister from "./components/AdminRegister";
import addMail from "./Services/mailService/addMail";
import updateInstructor from "./Services/instructorService/updateInstructor";
import viewInstructor from "./Services/instructorService/viewInstructor";
import viewAdministrator from "./Services/administratorService/viewAdministrator";
import updateAdministrator from "./Services/administratorService/updateAdministrator";
import viewNote from "./Services/studentMarkService/viewNote";
import editNote from "./Services/studentMarkService/editNote";
import addNote from "./Services/studentMarkService/addNote";
import deleteNote from "./Services/studentMarkService/deleteNote";
import addMarks from "./Services/studentMarkService/addMarks";
import viewMarks from "./Services/studentMarkService/viewMarks";
import editMarks from "./Services/studentMarkService/editMarks";
import deleteMarks from "./Services/studentMarkService/deleteMarks";
import marksStudent from "./Services/studentMarkService/marksStudent";
import studentViewNotes from "./Services/studentMarkService/studentViewNotes";
import studentCourseList from "./Services/service/studentCourseList";
import addAssingmet from "./Services/assignmentService/addAssingmet";
import viewAssingmemt from "./Services/assignmentService/viewAssingmemt";
import deleteAssingmemt from "./Services/assignmentService/deleteAssingmemt";

class App extends Component {
  render() {
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
          <h3 style={{ color: "white" }}>
            Welcome to TechGang CourseWeb
            <br />
          </h3>

          <body className="app-body">
            <Route exact path="/" component={GeneralRContainer} />
            <Route exact path="/userHome" component={AdminRContainer} />
            <Route
              exact
              path="/instructorHome"
              component={InstructorRContainer}
            />
            <Route exact path="/studentHome" component={StudentRContainer} />

            <Route exact path="/adminregister" component={AdminRegister} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/studentregister" component={StudentRegister} />
            <Route
              exact
              path="/instructorregister"
              component={InstructorRegister}
            />

            <Route exact path="/login" component={Login} />
            <Route exact path="/studentlogin" component={StudentLogin} />
            <Route exact path="/instructorlogin" component={InstructorLogin} />
            <Route exact path="/profile" component={Profile} />

            <Route
              exact
              path="/instructorprofile"
              component={InstructorProfile}
            />

            <Route exact path="/studentprofile" component={StudentProfile} />

            <Route exact path="/addCourse" component={addCourse} />
            <Route exact path="/viewCourse" component={viewCourse} />
            <Route exact path="/editCourse/:id" component={updateCourse} />

            <Route exact path="/viewStudent" component={viewStudent} />
            <Route exact path="/editStudent/:id" component={updateStudent} />

            <Route exact path="/viewInstructor" component={viewInstructor} />
            <Route
              exact
              path="/editInstructor/:id"
              component={updateInstructor}
            />

            <Route
              exact
              path="/viewAdministrator"
              component={viewAdministrator}
            />
            <Route
              exact
              path="/editAdministrator/:id"
              component={updateAdministrator}
            />

            <Route exact path="/addMail" component={addMail} />

            <Route path="/courses" exact component={ListCoursesComponent} />
            <Route path="/courses/:id" component={CourseComponent} />
            <Route path="/studentCourseList" exact component={studentCourseList} />



          {/* Tharaka's Routes starts here */}

              <Route path="/viewNotice" exact component={viewNote}/>
              <Route path="/editnote/:id" component={editNote}/>
              <Route path="/addNotice" component={addNote}/>
              <Route path="/deletenote/:id" component={deleteNote}/>
              <Route path="/viewStudentsTharaka" component={studentViewNotes}/>


              <Route path="/addMarks" component={addMarks}/>
              <Route path="/viewMarks" component={viewMarks}/>
              <Route path="/editmarks/:id" component={editMarks}/>
              <Route path="/deletemarks/:id" component={deleteMarks}/>
              <Route path="/viewStudentMarks" component={marksStudent}/>

              <Route path="/aAdd" component={addAssingmet}/>
              <Route path="/viewA" component={viewAssingmemt}/>
              <Route path="/deleteA/:id" component={deleteAssingmemt}/>


          
          {/* Tharaka's Routes ends here */}

          </body>
        </div>
      </Router>
    );
  }
}

export default App;
