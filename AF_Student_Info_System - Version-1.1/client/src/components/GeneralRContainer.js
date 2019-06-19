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
        <div >
          <PTransition />
          <h5 className="App" style={{ color: "yellow",backgroundColor:"#0B1C77",width:"1345px",height:"50px" }}>
           2019 Enrollement is open now-Software Engineering-Electronic Engineering-Business Management
            <br/>  
          </h5>
          <br />
          {/* <Link to="/addBooking" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> New Reservation</i>
          </Link> */}
          
          <hr />
        </div>
        <div className="nextEach">
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
