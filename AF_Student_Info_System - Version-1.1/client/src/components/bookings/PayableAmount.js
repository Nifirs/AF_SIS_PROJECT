import React, { Component } from "react";
import { Link } from "react-router-dom";

class PayableAmount extends Component {
  sum() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 * data2;

    if (isNaN(total)) {
      if (isNaN(data1) && Number.isInteger(data2)) {
        console.log("First Empty");
        total = data2;
      }
      if (isNaN(data2) && Number.isInteger(data1)) {
        console.log("Second Empty");
        total = data1;
      }
      if (isNaN(data1) && isNaN(data2)) {
        console.log("Both Empty");
        total = 0;
      }
      console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <Link
            to="/addBooking"
            className="btn"
            style={{ backgroundColor: "#89888D", color: "black" }}
          >
            <i className="fa fa-chevron-circle-left">
              &nbsp;Back to Reservation
            </i>
          </Link>
          <br />
          <br />

          <Link
            to=""
            className="nav-link"
            style={{ backgroundColor: "#89888D", color: "black" }}
          >
            <h6 style={{ color: "white" }}>Calculation Portal</h6>
          </Link>
          <div style={{ backgroundColor: "#DDE0E0" }}>
            <br />
            <div className="container">
              <div
                className="form-group"
                style={{ color: "black", width: "600px" }}
              >
                <h6>Enter the No of Tickets</h6>
                <input
                  type="text"
                  name="amount"
                  className="form-control"
                  id="in1"
                  placeholder="No of Tickets"
                  onChange={this.onChange}
                />
                <br />
                <h6>Enter the Value of a Ticket</h6>
                <input
                  type="text"
                  name="amount"
                  className="form-control"
                  id="in2"
                  placeholder="Value of a Ticket"
                  onChange={this.onChange}
                />
                <br />
                <br />
                <input
                  className="form-control"
                  className="btn btn-primary "
                  type="submit"
                  onClick={() => this.sum()}
                  value="Count Payable Amount For the Tickets"
                />

                <br />
                <br />

                <div className="indata">
                  <h6>Total Amount you have to pay</h6>
                  <div id="in3" className="answ1" className="form-control" />
                </div>
                <br />
              </div>
            </div>
          </div>
          <Link
            to="/viewEmployees"
            className="nav-link"
            style={{ backgroundColor: "red" }}
          >
            <h6 style={{ color: "white" }}>
              If you are a Government Employee please click here to earn your
              Discounts
            </h6>
          </Link>
        </div>
      </div>
    );
  }
}

export default PayableAmount;
