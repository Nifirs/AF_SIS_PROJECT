import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class updateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course_name: "",
      instructor_name: "",
      instructor_email: "",
      message:""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5001/courses/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          course_name: response.data.course_name,
          instructor_name: response.data.instructor_name,
          instructor_email: response.data.instructor_email,
          message: response.data.message,

        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onSubmit(e) {
    e.preventDefault(); //we want to make sure it doesn't REFRESH the page
    const updatedBill = {
      course_name: this.state.course_name,
      instructor_name: this.state.instructor_name,
      instructor_email: this.state.instructor_email,
      message: this.state.message

    };
    axios
      .post(
        "http://localhost:5001/courses/update/" + this.props.match.params.id,
        updatedBill
      )
      .then(res => console.log.apply(res.data));
    window.alert("Course Updated Successfully !");

    this.props.history.push("/viewCourse");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //"name":refers the name fields of all the inputs
  }

  render() {
    return (
      <div style={{ backgroundColor: "#909092", height: "800px" }}>
        <div className="addProjectTask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/viewCourse" className="btn btn-light">
                  <i class="fa fa-chevron-circle-left" aria-hidden="true">
                    &nbsp;Back to Course Details
                  </i>
                </Link>
                <br />
                <br />
                <h6 style={{ color: "white" }}>Update-Course Assigned Details</h6>
                <br />

                <form onSubmit={this.onSubmit}>
                  {/* <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#31C4F7",
                      height: 10
                    }}
                  /> */}
                  <br />
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#48494f",
                      height: 20
                    }}
                  />{" "}
                  <ul>
                    <li>
                      <i class="fas fa-plus-circle" /> TechGang Web Solutions
                      SIS
                    </li>
                    <li>
                      <i class="fa fa-road" /> 44, IdealSolutions,Colombo 03
                    </li>
                    <li>
                      <i class="fa fa-phone" /> (555) 555-5555
                    </li>
                    <li>
                      <i class="fa fa-envelope" /> IdealSolutions@teschgang.com
                    </li>
                  </ul>
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#48494f",
                      height: 20
                    }}
                  />
                  <h6 style={{ color: "white" }}>
                    Send-Mail to the Instructors on assigned courses
                  </h6>
                  <br />
                  <div className="form-group">
                    <h6>Enter Course Name</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="course_name"
                      value={this.state.course_name}
                      placeholder="Course Name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Instructor Name</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="instructor_name"
                      value={this.state.instructor_name}
                      placeholder="Instructor Name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Instructor E-mail</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Instructor E-mail"
                      name="instructor_email"
                      value={this.state.instructor_email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter the Message</h6>
                    <p class="full">
                      <textarea
                        name="message"
                        value={this.state.message}
                        rows="5"
                        className="form-control"
                        placeholder="Enter the message..."
                        onChange={this.onChange}

                      />
                    </p>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                    value="Update Sent Mail"
                  />
                  <i className="fa fa-envelope">
                    &nbsp;Click here to send a Mail to the Instructor
                  </i>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default updateCourse;
