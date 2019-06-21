import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class updateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/students/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          password: response.data.password
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onSubmit(e) {
    e.preventDefault(); //we want to make sure it doesn't REFRESH the page
    const updatedStudent = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(
        "http://localhost:5000/students/update/" + this.props.match.params.id,
        updatedStudent
      )
      .then(res => console.log.apply(res.data));
    window.alert("Student Updated Successfully !");

    this.props.history.push("/viewStudent");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //"name":refers the name fields of all the inputs
  }

  render() {
    return (
      <div style={{ backgroundColor: "#909092", height: "1200px" }}>
        <div className="addProjectTask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/viewStudent" className="btn btn-light">
                  <i class="fa fa-chevron-circle-left" aria-hidden="true">
                    &nbsp;Back to Students Details
                  </i>
                </Link>
                <br />
                <br />
                <h6 style={{ color: "white" }}>Update-Students Details</h6>

                <form onSubmit={this.onSubmit}>
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#48494f",
                      height: 20
                    }}
                  />

                  <br />
                  <div className="form-group">
                    <h6>Enter First Name</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="first_name"
                      value={this.state.first_name}
                      placeholder="First Name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Last Name</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="last_name"
                      value={this.state.last_name}
                      placeholder="Last Name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Student E-mail</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Student E-mail"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter the Password</h6>

                    <input
                      type="text"
                      name="password"
                      value={this.state.password}
                      className="form-control form-control-lg"
                      placeholder="Enter the Password"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                    value="Update Student"
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

export default updateStudent;
