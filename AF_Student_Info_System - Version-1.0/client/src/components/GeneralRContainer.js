import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

class GeneralRContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <PTransition />

          <br />
          <Link to="/addBooking" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> New Reservation</i>
          </Link>
          <br />
          <hr />
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
export default GeneralRContainer;
