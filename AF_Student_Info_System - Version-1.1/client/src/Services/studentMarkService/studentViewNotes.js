import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Note = props => (
  <div>
    <div
      style={{
        color: "black",
        background: "white",
        marginLeft: "1000px",
        marginRight: "10px"
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

export default class studentViewNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
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
      <br/>
        <h4 style={{ marginLeft: "1000px", marginRight: "10px",color:"white" }}>Important Notices</h4>

        <div>
          <p>{this.courseList()}</p>
        </div>
      </div>
    );
  }
}
