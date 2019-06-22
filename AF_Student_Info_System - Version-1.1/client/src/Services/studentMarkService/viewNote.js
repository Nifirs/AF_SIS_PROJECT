import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Note = props => (
  <tr>
    <td>{props.note.NoteDate}</td>
    <td>{props.note.NoteSub}</td>
    <td>{props.note.Note}</td>
    <td>
      <Link to={"/editnote/" + props.note._id}>Edit</Link>
    </td>
    <td>
      <Link to={"/deletenote/" + props.note._id}>Delete</Link>
    </td>
  </tr>
);

export default class viewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
    const token = localStorage.instructortoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });

    axios
      .get("http://localhost:5000/notifys/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/notifys/all")
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
        <Link className="btn btn-light">
          <i className="fa fa-user-circle" aria-hidden="true">
            &nbsp;&nbsp;<b>Hello {this.state.first_name}</b>{" "}
          </i>
        </Link>
        <br />
        <br />
        <Link
          to="/instructorHome"
          className="btn btn-light"
          style={{ backgroundColor: "#89888D", color: "black" }}
        >
          <i className="fa fa-chevron-circle-left" aria-hidden="true">
            &nbsp;Back to Instructor-Home
          </i>
        </Link>
        <br />
        <br />
        <div className="card mb-1 bg-light">
          <h3 className="App1">View Notices</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Note Date</th>
                <th>Note Subject</th>
                <th>Note</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>{this.courseList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
