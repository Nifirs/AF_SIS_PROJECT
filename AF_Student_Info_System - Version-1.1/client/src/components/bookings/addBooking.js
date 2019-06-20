import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";

class addBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainName: "",
      amount: "",
      classes: "",
      payment: "",
      email: "",
      status: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    ///missing some
  }
  sum() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 + data2;

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

  onSubmit(e) {
    //to get rid of default behavior
    e.preventDefault(); //we want to make sure it doesn't REFRESH the page

    console.log("form submitted");
    window.alert("Reservation Added Successfully !");

    const newReservation = {
      trainName: this.state.trainName,
      amount: this.state.amount,
      classes: this.state.classes,
      payment: this.state.payment,
      email: this.state.email,
      status: this.state.status
    };

    axios
      .post("http://localhost:5000/reservation/add", newReservation)
      .then(res => console.log(res.data));
    // this.props.history.push('/addBooking');

    this.setState = {
      trainName: "",
      amount: "",
      classes: "",
      payment: "",
      email: "",
      status: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //"name":refers the name fields of all the inputs
  }

  render() {
    return (
      <div style={{ backgroundColor: "#909092", height: "1300px" }}>
        <div className="addProjectTask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-light">
                  <i class="fa fa-chevron-circle-left" aria-hidden="true">
                    &nbsp;Back to Board
                  </i>
                </Link>

                <form onSubmit={this.onSubmit}>
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#51BFC6",
                      height: 10
                    }}
                  />
                  <h6 style={{ color: "white" }}>Online-Reservation</h6>
                  <br />
                  <h6>Select the Status</h6>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                    >
                      <option value="">What is the Status</option>
                      <option value="planned">Planned</option>
                      <option value="reserved">Reserved</option>
                      <option value="attended">Attended</option>
                    </select>
                  </div>
                  <h6>Select the Train Name</h6>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="trainName"
                      value={this.state.trainName}
                      onChange={this.onChange}
                    >
                      <option value="">Train Type</option>
                      <option value="Ruhunu-Kumari">Ruhunu-Kumari</option>
                      <option value="Galu-Kumari">Galu-Kumari</option>
                      <option value="Express-Kumari-1">Express-Kumari-1</option>
                      <option value="Express-Kumari-2">Express-Kumari-2</option>
                      <option value="Yaldevi">Yaldevi</option>
                    </select>
                  </div>
                  <h6>Select the Class</h6>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="classes"
                      value={this.state.classes}
                      onChange={this.onChange}
                    >
                      <option value="">Select Class</option>
                      <option value="1st">1st class</option>
                      <option value="2nd">2nd class</option>
                      <option value="3rd">3rd class</option>
                    </select>
                  </div>
                  <h6>Enter the No of Tickets</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="amount"
                      value={this.state.amount}
                      placeholder="No of Tickets"
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Select the Payment Method</h6>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="payment"
                      value={this.state.payment}
                      onChange={this.onChange}
                    >
                      <option value="">Payment Type</option>
                      <option value="sampath">Sampath-Credit</option>
                      <option value="dialog">Dialog-mobile</option>
                    </select>
                  </div>
                  <h6>Enter the E-mail Address</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter E-mail"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                    value="Add Reservation"
                  />
                  <br />
                  <br />
                  <Link to="/PayableAmount" className="btn btn-light">
                    <i class="fa fa-th-large">
                      &nbsp;&nbsp;Count the Payable Amount{" "}
                    </i>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
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
            <h6 style={{ color: "white" }}>Pay the Amount via :&nbsp;&nbsp;</h6>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/addCard"
                  className="nav-link"
                  class="fa fa-credit-card"
                >
                  &nbsp;&nbsp;Sampath Bank Payment
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  to="/addBill"
                  className="nav-link"
                  class="fa fa-phone-square"
                >
                  &nbsp;&nbsp;Dialog Mobile Payment
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default addBooking;
