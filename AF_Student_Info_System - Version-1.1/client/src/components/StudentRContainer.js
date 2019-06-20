import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import CardContainer from "./CardContainer";

class StudentRContainer extends Component {
  render() {
    return (
      <div>
        <br />

        <br />
        <div className="container">
          <PTransition />
          <div style={{ color: "white",width:"1130px"}}>
            <Link
              to=""
              className="nav-link"
              style={{ backgroundColor: "#89888D", color: "black" }}
            >
              <h6 style={{ color: "white"}}>Administrator Portal</h6>
            </Link>
          </div>
          <br />
          <Link
            to="/addBooking"
            className="btn btn-primary mb-3"
            style={{ width: "300px" }}
          >
            <i className="fas fa-plus-circle"> New Reservation</i>
          </Link>
          <br />
          <Link
            to="/ViewBooking"
            className="btn btn-primary mb-3"
            style={{ width: "300px" }}
          >
            <i class="fa fa-calculator" aria-hidden="true">
              {" "}
              View Reservation
            </i>
          </Link>
          <br />
          <Link
            to="/ViewBill"
            className="btn btn-primary mb-3"
            style={{ width: "300px" }}
          >
            <i class="fa fa-university" aria-hidden="true">
              {" "}
              View Mobile Details
            </i>
          </Link>
          <br />
          <Link
            to="/ViewCard"
            className="btn btn-primary mb-3"
            style={{ width: "300px" }}
          >
            <i class="fa fa-address-card" aria-hidden="true">
              &nbsp; View Credit Card Details
            </i>
          </Link>
          <br />
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

export default StudentRContainer;
