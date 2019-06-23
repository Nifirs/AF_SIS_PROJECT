import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.png";

import logo3 from "../components/hh.png";
import logo5 from "../components/exit.png";
import logo4 from "../components/pro2.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
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
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{color:"black"}}>
                <img src={logo} className="logoMain" alt="logo" />
                Main-Home
              </Link>
            </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a href="http://localhost:3000/instructorHome" className="nav-link" aria-hidden="true">
                  <img src={logo3} className="logoMain" alt="logo" />
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-hidden="true"
                >
                  <img src={logo4} className="logoMain" alt="logo" />
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a href="" className="nav-link" aria-hidden="true">
                  <img src={logo5} className="logoMain" alt="logo" />
                </a>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
