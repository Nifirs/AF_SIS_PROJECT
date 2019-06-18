import React, { Component } from "react";
import { register } from "./UserFunctions";
import "./App.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    register(user).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div
        className="wrapper"
        style={{ backgroundColor: "#96979B", height: "800px" }}
      >
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <h5 style={{ color: "white" }}>PLEASE SIGN UP TO THE PORTAL</h5>
            <br />
            <hr
              style={{
                color: "purple",
                backgroundColor: "#27C1B2",
                height: 10
              }}
            />
            <div style={{ color: "black" }} className="form-group">
              <label htmlFor="first_name">
                <h6>First Name</h6>
              </label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter First Name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div style={{ color: "black" }} className="form-group">
              <label htmlFor="last_name">
                <h6>Last Name</h6>
              </label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter Last Name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </div>
            <div style={{ color: "black" }} className="form-group">
              <label htmlFor="email">
                <h6>Email Address</h6>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div style={{ color: "black" }} className="form-group">
              <label htmlFor="password">
                <h6>Password</h6>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-block"
              style={{ color: "white", backgroundColor: "#7024DB" }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
