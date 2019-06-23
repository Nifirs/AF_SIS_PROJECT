import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavBar from "../../components/AdminNavBar";
import jwt_decode from "jwt-decode";
import Resv from "./Resv";



class viewAdministrator extends Component {
  constructor(props) {
    super(props);
    this.state = { r: [] };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email

    });

    axios
      .get("http://localhost:5001/users/")
      .then(response => {
        this.setState({ r: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5001/users/")
      .then(response => {
        this.setState({ r: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  reservationList() {
    return this.state.r.map(function(currentReservation, i) {
      return <Resv resv={currentReservation} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn btn-light">
          <i className="fa fa-user-circle" aria-hidden="true">
            &nbsp;&nbsp;<b>Hello {this.state.first_name}</b>{" "}
          </i>
        </Link>
        <br />
        <br />
        <AdminNavBar />
        <br />
        <div className="card mb-1 bg-light">
          <h3 className="App1">Registered Administrators Details</h3>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Administrator E-mail</th>

                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.reservationList()}</tbody>
          </table>
        </div>




      </div>
    );
  }
}

export default viewAdministrator;
