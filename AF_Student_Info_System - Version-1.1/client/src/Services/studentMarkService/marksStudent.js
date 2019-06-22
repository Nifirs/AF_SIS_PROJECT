import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Marks = props => (
  <tr>
    <td>{props.marks.Subject}</td>
    <td>{props.marks.RegNo}</td>
    <td>{props.marks.Marks}</td>
  </tr>
);

export default class marksStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { marks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/notifys")
      .then(response => {
        this.setState({ marks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  courseList() {
    return this.state.marks.map((currentCourse, i) => {
      return <Marks marks={currentCourse} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: 400, marginRight: 400 }}>
        <br/>
        <h4 style={{ marginRight: "200px",color:"white" }}>Marks List</h4>

          <table className="table table-striped bg-light" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Register No</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>{this.courseList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
