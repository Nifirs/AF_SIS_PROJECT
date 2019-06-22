import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

class AdminRContainer extends Component {
  render() {
    return (
      <div>
        <br />

        <br />
        <div className="container">
          <PTransition />
          <div style={{ color: "white", width: "1130px" }}>
            <Link
              to=""
              className="nav-link"
              style={{ backgroundColor: "#89888D", color: "black" }}
            >
              <h6 style={{ color: "white" }}>Administrator Portal</h6>
            </Link>
          </div>
          <br />
          <div
            className="nextEach"
            style={{ width: "1110px", padding: "5px", backgroundColor: "grey" }}
          >
            <div>
              <Link
                to="/addCourse"
                className="btn btn-danger mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i className="fas fa-plus-circle"> Add Course</i>
              </Link>
              <br />
              <Link
                to="/courses"
                className="btn btn-danger mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-calculator" aria-hidden="true">
                  {" "}
                  View Courses
                </i>
              </Link>
              <br />
              <Link
                to="/viewCourse"
                className="btn btn-danger mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; View Instructors-Courses
                </i>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <div>
              <Link
                to="/viewStudent"
                className="btn btn-primary mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-university" aria-hidden="true">
                  {" "}
                  View registered Students
                </i>
              </Link>

              <br />
              <Link
                to="/viewInstructor"
                className="btn btn-primary mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; View registered Instructors
                </i>
              </Link>
              <br />
              <Link
                to="/viewAdministrator"
                className="btn btn-primary mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; View registered Administrators
                </i>
              </Link>
            </div>
          </div>
          <br />
        </div>

        <h5
          className="App"
          style={{
            color: "yellow",
            backgroundColor: "#0B1C77",
            width: "1345px",
            height: "50px"
          }}
        >
          2019 Enrollement is open now-Software Engineering-Electronic
          Engineering-Business Management
          <br />
        </h5>
        <div className="nextEach">
          <CardContainer />
          <BtnGroup />
          <br />
        </div>
      </div>
    );
  }
}

export default AdminRContainer;
