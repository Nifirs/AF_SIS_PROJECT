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
      .get("http://localhost:5001/instructors/delete/" + this.props.resv._id)
      .then(window.alert("Instructor Deleted"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.resv.first_name}</td>
        <td>{this.props.resv.last_name}</td>
        <td>{this.props.resv.email}</td>
        <td>{this.props.resv.password}</td>

        <td>
          <i class="fa fa-window-restore" aria-hidden="true">
            &nbsp;&nbsp;
          </i>
          <Link
            className="btn btn-info"
            to={"/editInstructor/" + this.props.resv._id}
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
