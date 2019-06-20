import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class updateBooking extends Component {
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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/reservation/" + this.props.match.params.tr_id)
      .then(response => {
        this.setState({
          trainName: response.data.trainName,
          amount: response.data.amount,
          classes: response.data.classes,
          payment: response.data.payment,
          email: response.data.email,
          status: response.data.status
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onSubmit(e) {
    e.preventDefault(); //we want to make sure it doesn't REFRESH the page
    const updatedReservation = {
      trainName: this.state.trainName,
      amount: this.state.amount,
      classes: this.state.classes,
      payment: this.state.payment,
      email: this.state.email,
      status: this.state.status
    };
    axios
      .post(
        "http://localhost:5000/reservation/update/" +
          this.props.match.params.tr_id,
        updatedReservation
      )
      .then(res => console.log.apply(res.data));
    window.alert("Reservation Updated Successfully !");

    this.props.history.push("/ViewBooking");
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
                <Link to="/ViewBooking" className="btn btn-light">
                  <i class="fa fa-chevron-circle-left" aria-hidden="true">
                    &nbsp;Back to View Booking
                  </i>
                </Link>
                <br />
                <br />

                <h6 style={{ color: "white" }}>Update-Reservation</h6>

                <form onSubmit={this.onSubmit}>
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#51BFC6",
                      height: 10
                    }}
                  />
                  <br />
                  <h6>Select the Status</h6>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="status"
                      onChange={this.onChange}
                      value={this.state.status}
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
                      onChange={this.onChange}
                      placeholder="No of Tickets"
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
                    value="UPDATE"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default updateBooking;
