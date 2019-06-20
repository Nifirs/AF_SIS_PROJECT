import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.png";
import logo1 from "../images/aq.png";
import logo2 from "../images/k.png";
import logo3 from "../images/hh.png";
import logo5 from "../images/exit.png";
import logo4 from "../images/pro2.png";

class Navbar extends Component {
  inslogOut(e) {
    e.preventDefault();
    localStorage.removeItem("instructortoken");
    this.props.history.push(`/`);
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  stulogOut(e) {
    e.preventDefault();
    localStorage.removeItem("studenttoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <img src={logo2} className="logoMain" alt="logo" />
            User-Login
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/studentregister" className="nav-link">
            <img src={logo1} className="logoMain" alt="logo" />
            Student-Registration
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/userHome" className="nav-link">
            <img src={logo3} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/profile" className="nav-link" aria-hidden="true">
            <img src={logo4} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <img src={logo1} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.logOut.bind(this)}
            className="nav-link"
            aria-hidden="true"
          >
            <img src={logo5} className="logoMain" alt="logo" />
          </a>
        </li>
      </ul>
    );
    const instructorLink = (
      <ul className="navbar-nav">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/instructorHome" className="nav-link">
            <img src={logo3} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/instructorprofile" className="nav-link" aria-hidden="true">
            <img src={logo4} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.inslogOut.bind(this)}
            className="nav-link"
            aria-hidden="true"
          >
            <img src={logo5} className="logoMain" alt="logo" />
          </a>
        </li>
      </ul>
    );
    const studentLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/studentHome" className="nav-link">
            <img src={logo3} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/studentprofile" className="nav-link" aria-hidden="true">
            <img src={logo4} className="logoMain" alt="logo" />
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.stulogOut.bind(this)}
            className="nav-link"
            aria-hidden="true"
          >
            <img src={logo5} className="logoMain" alt="logo" />
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar1"
        >
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                <img src={logo1} className="logoMain" alt="logo" />
                
              </Link>
            </li> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <img src={logo} className="logoMain" alt="logo" />
                Main-Home
              </Link>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </ul>

          {localStorage.usertoken ? userLink : loginRegLink}
          {localStorage.instructortoken ? instructorLink : ""}
          {localStorage.studenttoken ? studentLink : ""}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
