import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

class InstructorRContainer extends Component {
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
              <h6 style={{ color: "white" }}>Instructor Portal</h6>
            </Link>
          </div>
          <br />

          <a
            style={{ width: "1130px", backgroundColor: "black" }}
            className="btn btn-danger mb-3"
            href="http://localhost:3001/"
          >
            <i className="fa fa-check-circle">&nbsp;Online Exam Portal</i>
          </a>

          <br />
          <div
            className="nextEach"
            style={{ width: "1130px", padding: "5px", backgroundColor: "grey" }}
          >
            <div>
              <Link
                to="/addNotice"
                className="btn btn-danger mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i class="fas fa-plus-circle" aria-hidden="true">
                  {" "}
                  Add Notices
                </i>
              </Link>
              <br />
              <Link
                to="/viewNotice"
                className="btn btn-danger mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i className="fa fa-calculator"> View Notices</i>
              </Link>
              <br />

              <Link
                to="/viewStudentsTharaka"
                className="btn btn-danger mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp;  Notice View of Students
                </i>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;
            <br />
            <div>
              <Link
                to="/addMarks"
                className="btn btn-primary mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i class="fas fa-plus-circle" aria-hidden="true">
                  {" "}
                  Add Marks
                </i>
              </Link>

              <br />
              <Link
                to="/viewMarks"
                className="btn btn-primary mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i class="fa fa-calculator" aria-hidden="true">
                  &nbsp; View Marks
                </i>
              </Link>
              <br />
              <Link
                to="/viewStudentMarks"
                className="btn btn-primary mb-3"
                style={{ width: "360px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp;Marks View of Students 
                </i>
              </Link>
            </div>{" "}
            &nbsp;&nbsp;&nbsp;
            <div>
              <Link
                to="/aAdd"
                className="btn btn-danger mb-3"
                style={{
                  width: "360px",
                  backgroundColor: "black"
                }}
              >
                <i className="fas fa-plus-circle">
                  &nbsp;&nbsp;&nbsp; Add Assignment 
                </i>
              </Link>
              <Link
                to="/viewA"
                className="btn btn-danger mb-3"
                style={{
                  width: "360px",
                  backgroundColor: "black"
                }}
              >
                <i className="fa fa-calculator">
                  &nbsp;&nbsp;&nbsp;View Assignment 
                </i>
              </Link>
              <Link
                to="/viewNotice"
                className="btn btn-danger mb-3"
                style={{
                  width: "360px",
                  backgroundColor: "black"
                }}
              >
                <i className="fa fa-address-card">
                  &nbsp;&nbsp;&nbsp; Assignment View of Students
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
        </h5>
        <div className="nextEach">
          <CardContainer />
          <BtnGroup />
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default InstructorRContainer;
