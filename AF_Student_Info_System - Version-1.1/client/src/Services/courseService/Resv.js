import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Resv extends Component {
  constructor(props) {
    super(props);
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickDelete() {
    axios
      .get("http://localhost:5000/courses/delete/" + this.props.resv._id)
      .then(window.alert("Course Deleted"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.resv.course_name}</td>
        <td>{this.props.resv.instructor_name}</td>
        <td>{this.props.resv.instructor_email}</td>

        <td>
          <i class="fa fa-window-restore" aria-hidden="true">
            &nbsp;&nbsp;
          </i>
          <Link
            className="btn btn-info"
            to={"/editCourse/" + this.props.resv._id}
          >
            Edit
          </Link>
        </td>
        <td>
          <i class="fa fa-trash" aria-hidden="true">
            &nbsp;&nbsp;
          </i>
          <button className="btn btn-danger" onClick={this.clickDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Resv;
