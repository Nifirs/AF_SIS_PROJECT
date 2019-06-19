import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import PTransition from "./PTransition";
import BtnGroup from "./BtnGroup";
import ViewBooking from "./bookings/ViewBooking";
import CardContainer from "./CardContainer";

class RContainer extends Component {
  render() {
    let BoardContent;
    let plannedR = [];
    let reservedR = [];
    let attendedR = [];

    const BoardAlgorithm = ticket_reservations => {
      if (ticket_reservations.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            Currently No Reservations on the Board
          </div>
        );
      } else {
        const resvs = ticket_reservations.map(reservation => (
          <ViewBooking key={reservation.id} reservation={reservation} />
        ));

        for (let i = 0; i < resvs.length; i++) {
          if (resvs[i].props.reservation.status === "planned") {
            plannedR.push(resvs[i]);
          }

          if (resvs[i].props.reservation.status === "reserved") {
            reservedR.push(resvs[i]);
          }

          if (resvs[i].props.reservation.status === "attended") {
            attendedR.push(resvs[i]);
          }
        }

        return (
          <React.Fragment>
            <div className="container" style={{ backgroundColor: "black" }}>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-secondary text-white">
                      <h5>Planned</h5>
                    </div>
                  </div>
                  {plannedR}
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-primary text-white">
                      <h5>Reserved</h5>
                    </div>
                  </div>
                  {reservedR}
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-success text-white">
                      <h5>Attended</h5>
                    </div>
                  </div>
                  {attendedR}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    };

    return (
      <div>
        <div className="container">
          {/* <div className="row"> */}
          <PTransition />

          <br />
          <Link to="/addBooking" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> New Reservation</i>
          </Link>
          <Link to="/ViewBooking" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> View Reservation</i>
          </Link>
          <br />
          <hr />
          {BoardContent}
          {/* <CardContainer/>
         <BtnGroup /> */}

          {/* </div> */}
        </div>
        <div className="nextEach">
          <br />
          {/* <Link to="/addBooking" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> New Reservation</i>
          </Link> */}
          <CardContainer />
          <BtnGroup />
          <br />
          <hr />
          {/* <PTransition /> */}
          {/* <BtnGroup /> */}
        </div>
        {/* <hr />

        {BoardContent} */}
      </div>
    );
  }
}

export default RContainer;
