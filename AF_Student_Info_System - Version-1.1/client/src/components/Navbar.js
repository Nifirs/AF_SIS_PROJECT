import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.png";
import logo1 from "./af1.jpg";

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

  // renderswitch(usertoken){
  //     switch(usertoken){
  //       case 'userLink':return userLink;

  //       case 'loginRegLink':return loginRegLink;


  //       default:console.log("called me")
  //     }


  // }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            User-Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/studentregister" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/userHome"
            className="nav-link"
            className="fa fa-home fa-fw"
          />
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link
            to="/profile"
            className="nav-link"
            className="fa fa-user-circle"
            aria-hidden="true"
          />
        </li>
       
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.logOut.bind(this)}
            className="nav-link"
            className="fa fa-power-off"
            aria-hidden="true"
          />
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link
            to="/register"
            className="nav-link"   
            aria-hidden="true"
          >Register</Link>
        </li>
      </ul>
    );
    const instructorLink = (
      <ul className="navbar-nav">
      
        &nbsp;&nbsp;&nbsp;&nbsp;

        <li className="nav-item">
          <Link
            to="/instructorHome"
            className="nav-link"
            className="fa fa-home fa-fw"
          />
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link
            to="/instructorprofile"
            className="nav-link"
            className="fa fa-user-circle"
            aria-hidden="true"
          />
        </li>
       
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.inslogOut.bind(this)}
            className="nav-link"
            className="fa fa-power-off"
            aria-hidden="true"
          />
        </li>
        
      </ul>
    );
    const studentLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/studentHome"
            className="nav-link"
            className="fa fa-home fa-fw"
          />
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link
            to="/studentprofile"
            className="nav-link"
            className="fa fa-user-circle"
            aria-hidden="true"
          />
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <a
            href=""
            onClick={this.stulogOut.bind(this)}
            className="nav-link"
            className="fa fa-power-off"
            aria-hidden="true"
          />
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
          <li className="nav-item">
              <Link to="/" className="nav-link">
                <img src={logo1} className="logoMain" alt="logo" />
                
              </Link>
            </li>
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
          
          {/* {this.renderswitch(localStorage.usertoken)} */}

        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
