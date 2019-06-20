import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class updateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course_name: "",
      instructor_name: "",
      instructor_email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/courses/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          course_name: response.data.course_name,
          instructor_name: response.data.instructor_name,
          instructor_email: response.data.instructor_email
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
      instructor_email: this.state.instructor_email
    };
    axios
      .post(
        "http://localhost:5000/courses/update/" + this.props.match.params.id,
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
                  <hr
                    style={{
                      color: "#50B3C0",
                      backgroundColor: "#51BFC6",
                      height: 10
                    }}
                  />

                  <div className="form-group">
                    <h6>Enter Course Name</h6>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="course_name"
                      maxLength="10"
                      value={this.state.course_name}
                      onChange={this.onChange}
                      placeholder="Course Name"
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Instructor Name</h6>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="instructor_name"
                      value={this.state.instructor_name}
                      onChange={this.onChange}
                      placeholder="Instructor Name"
                    />
                  </div>
                  <div className="form-group">
                    <h6>Enter Instructor E-mail</h6>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="instructor_email"
                      maxLength="4"
                      value={this.state.instructor_email}
                      onChange={this.onChange}
                      placeholder="Instructor E-mail"
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

export default updateCourse;
