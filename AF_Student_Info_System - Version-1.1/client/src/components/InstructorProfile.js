import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import bg from "../images/stu.jpg";

class InstructorProfile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  componentDidMount() {
    const token = localStorage.instructortoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${bg})`,
          height: "900px",
          width: "1200px"
        }}
      >
        <br />
        <Link className="btn btn-secondary" style={{ width: "600px" }}>
          <i className="fa fa-user-circle" aria-hidden="true">
            &nbsp;&nbsp;<b>Hello {this.state.first_name}</b>{" "}
          </i>
          <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </Link>
        <div
          className="jumbotron mt-1"
          style={{ width: "600px", height: "700px" }}
        >
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">INSTRUCTOR PROFILE</h1>
          </div>
          <table className="table table-stripped col-md-6 mx-auto btn-info">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-danger">DELETE</button>
                </td>
                <td>
                  <button className="btn btn-secondary">UPDATE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
    );
  }
}

export default InstructorProfile;
