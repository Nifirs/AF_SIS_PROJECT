import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import logo1 from "./images/af1.jpg";

import "bootstrap/dist/css/bootstrap.css";

import GeneralRContainer from "./components/GeneralRContainer";
import AdminRContainer from "./components/AdminRContainer";



import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Register from "./components/Register";
import Profile from "./components/Profile";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossOrigin="anonymous"
          />
          <Navbar />

          <br />

          <br />
          <h1 style={{ color: "white" }}>
            <b>Welcome to TechGang CourseWeb</b>
            <br/>  <br/>
          </h1>

          <body className="app-body">

            <Route exact path="/" component={GeneralRContainer} />
            <Route exact path="/userHome" component={AdminRContainer} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

          </body>
        </div>
      </Router>
    );
  }
}

export default App;
