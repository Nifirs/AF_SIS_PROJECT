import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

const Note = props => (
  <div>
    <div
      style={{
        color: "black",
        background: "white",
        width: "220px",
        marginRight: "10px",
        marginLeft: "350px",
        paddingLeft:"2px"

      }}
      align="left"
    >
      <p style={{ color: "gray" }}>
        Date: {props.note.NoteDate} <br />
        Title: {props.note.NoteSub} <br />
        Note: {props.note.Note}
      </p>
    </div>
  </div>
);

class StudentRContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/notifys/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  courseList() {
    return this.state.notes.map((currentCourse, i) => {
      return <Note note={currentCourse} key={i} />;
    });
  }

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
              <h6 style={{ color: "white" }}>Student Portal</h6>
            </Link>
          </div>
          <br />
          <div
            className="nextEach"
            style={{ width: "1110px", padding: "5px", backgroundColor: "grey" }}
          >
            <br />
            <div>
              <Link
                to="/studentCourseList"
                className="btn btn-primary mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; View Courses
                </i>
              </Link>
              <br />
              <Link
                to="/viewStudentMarks"
                className="btn btn-primary mb-3"
                style={{ width: "500px", backgroundColor: "black" }}
              >
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; View Student Marks
                </i>
              </Link>
            </div>
            <div>
              <h6
                style={{
                  marginRight: "10px",
                  marginLeft: "350px",
                  color: "white"
                }}
              >
                Important Notices
              </h6>

              <div>
                <p>{this.courseList()}</p>
              </div>
            </div>
          </div>

          <br />
          <hr
            style={{ color: "#50B3C0", backgroundColor: "#51BFC6", height: 10 }}
          />
        </div>
        <div className="nextEach">
          <br />

          <CardContainer />
          <BtnGroup />
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default StudentRContainer;
