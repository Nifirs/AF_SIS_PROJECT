import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

class InstructorRContainer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <PTransition />
          <div style={{ color: "white", width: "1130px" }}>
            <Link
              to=""
              className="nav-link"
              style={{ backgroundColor: "#89888D", color: "black" }}
            >
              <h6 style={{ color: "white" }}>Instructor Portal</h6>
            </Link>
          </div>
          <br />
        
          <br/>
          <hr
            style={{ color: "#50B3C0", backgroundColor: "#51BFC6", height: 10 }}
          />
        </div>
        <div className="nextEach">
          <br />

          <CardContainer />
          <BtnGroup />
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default InstructorRContainer;
