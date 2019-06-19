import React, { Component } from "react";
import { inslogin } from "./InstructorFunctions";
import {Link} from 'react-router-dom';

//new
import "./App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class InstructorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              
              Email: ${this.state.email}
              Password: ${this.state.password}
            `);
      const user = {
        email: this.state.email,
        password: this.state.password
      };

      inslogin(user).then(res => {
        if (res) {
          this.props.history.push(`/instructorprofile`);
        }
      });
    } else {
      console.error(
        "CAN NOT BE LOGGED IN FORM INVALID - DISPLAY ERROR MESSAGE"
      );
      alert("Can not be accessed! You should provide credentials accurately");
    }
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div
        className="wrapper"
        style={{ backgroundColor: "#494B4B", height: "600px" }}
      >
                        <nav className="navbar navbar-dark bg-dark navbar-collapse justify-content-md-center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">Admin-Login</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/studentlogin"} className="nav-link">&nbsp;&nbsp;&nbsp;&nbsp;Student-Login</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/instructorlogin"} className="nav-link">&nbsp;&nbsp;&nbsp;&nbsp;Instructor-Login</Link>
                                </li>
                            </ul>
                        </nav>
        <div className="form-group" className="col-md-6 mt-5 mx-auto">
          <br />
          <form noValidate onSubmit={this.onSubmit} style={{ color: "white" }}>
            <h5>INSTRUCTOR PLEASE SIGN IN TO THE PORTAL</h5>
            <br />
            <hr
              style={{
                color: "purple",
                backgroundColor: "#27C1B2",
                height: 10
              }}
            />

            <div className="form-group" style={{ color: "black" }}>
              <label htmlFor="email">
                <h6>Email Address&nbsp;&nbsp;</h6>
              </label>
              <input
                type="email"
                className="form-control"
                className={formErrors.email.length > 0 ? "error" : null}
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <br />
            <div className="form-group" style={{ color: "black" }}>
              <label htmlFor="password">
                <h6>
                  Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h6>{" "}
              </label>
              <input
                type="password"
                className="form-control"
                className={formErrors.password.length > 0 ? "error" : null}
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default InstructorLogin;
