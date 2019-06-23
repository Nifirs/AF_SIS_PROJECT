import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";

import CourseDataService from "../service/CourseDataService";
const INSTRUCTOR = "in28minutes";

class addCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      message: null,
      course_name: "",
      instructor_name: "",
      instructor_email: "",
      message: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    ///missing some
  }
  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourses(INSTRUCTOR) //HARDCODED
      .then(response => {
        //console.log(response);
        this.setState({ courses: response.data });
      });
  }

  onSubmit(e) {
    //to get rid of default behavior
    e.preventDefault(); //we want to make sure it doesn't REFRESH the page
    this.setState({
      course_name: "",
      instructor_name: "",
      instructor_email: "",
      message: ""
    });
    const newCourse = {
      course_name: this.state.course_name,
      instructor_name: this.state.instructor_name,
      instructor_email: this.state.instructor_email,
      message: this.state.message
    };

    axios
      .post("http://localhost:5001/courses/add", newCourse)
      .then(res => console.log(res.data));

    console.log("form submitted");
    window.alert("Course assigned Successfully !");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //"name":refers the name fields of all the inputs
  }

  render() {
    return (
      <div style={{ backgroundColor: "#909092", height: "1300px" }}>
        <div className="addProjectTask">
          <div className="container">
            <div className="nextEach">
              <div>
                <br />

                <h3 className="App1" style={{ width: "300px" }}>
                  All Courses
                </h3>

                <table
                  className="table table-striped bg-light "
                  style={{ width: "300px" }}
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.courses.map(course => (
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="container">
              <br/>
                <div
                  className="nextEach"
                  style={{
                    backgroundColor: "black",
                    padding: "5px",
                    width: "700px",
                    height: "60px",
                  }}
                >
                  <Link
                    to="/userHome"
                    className="btn btn-light"
                    style={{ width: "350px", height: "50px" }}
                  >
                    <i class="fa fa-chevron-circle-left" aria-hidden="true">
                      &nbsp;Back to Administrator Home
                    </i>
                  </Link>{" "}
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <div >
                    <Link
                      to="/addMail"
                      style={{ width: "350px" }}
                      className="btn btn-info"
                      onClick={this.addCourseClicked}
                    >
                      <i className="fas fa-plus-circle">
                        &nbsp;Send a Mail to Instructor
                      </i>
                    </Link>
                  </div>
                </div>
              
                <div className="row">
                  <div
                    className="col-md-8 m-auto"
                    style={{
                      backgroundColor: "grey",
                      width:"700px",
                      }}
                  >
                    <form onSubmit={this.onSubmit}>
                      <br />
                      <hr
                        style={{
                          color: "#50B3C0",
                          backgroundColor: "#48494f",
                          height: 20
                        }}
                      />{" "}
                      <ul>
                        <li>
                          <i class="fas fa-plus-circle" /> TechGang Web
                          Solutions SIS
                        </li>
                        <li>
                          <i class="fa fa-road" /> 44, IdealSolutions,Colombo 03
                        </li>
                        <li>
                          <i class="fa fa-phone" /> (555) 555-5555
                        </li>
                        <li>
                          <i class="fa fa-envelope" />{" "}
                          IdealSolutions@teschgang.com
                        </li>
                      </ul>
                      <hr
                        style={{
                          color: "#50B3C0",
                          backgroundColor: "#48494f",
                          height: 20
                        }}
                      />
                      <h6 style={{ color: "white" }}>
                        Newly-Available course Insertion
                      </h6>
                      <br />
                      <div className="form-group">
                        <h6>Enter Course Name</h6>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="course_name"
                          value={this.state.course_name}
                          placeholder="Course Name"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <h6>Enter Instructor Name</h6>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="instructor_name"
                          value={this.state.instructor_name}
                          placeholder="Instructor Name"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <h6>Enter Instructor E-mail</h6>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Instructor E-mail"
                          name="instructor_email"
                          value={this.state.instructor_email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <h6>Enter the Message</h6>
                        <p class="full">
                          <textarea
                            name="message"
                            value={this.state.message}
                            rows="5"
                            className="form-control"
                            placeholder="Enter the message..."
                            onChange={this.onChange}
                          />
                        </p>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-info btn-block mt-4"
                        value="INSERT"
                      />
                      <i className="fa fa-envelope">
                        &nbsp;After insertion this will notify the Instructor
                        via Mail
                      </i>
                    </form>
                    <br/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addCourse;
