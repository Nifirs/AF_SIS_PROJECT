import React, { Component } from "react";
import CourseDataService from "./CourseDataService";
import { Link } from "react-router-dom";

const INSTRUCTOR = "in28minutes";

class studentCourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      message: null
    };
    this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
    this.updateCourseClicked = this.updateCourseClicked.bind(this);
    this.addCourseClicked = this.addCourseClicked.bind(this);
    this.refreshCourses = this.refreshCourses.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourses(INSTRUCTOR) //HARDCODED
      .then(response => {
        //console.log(response);
        this.setState({ courses: response.data });
      });
  }

  deleteCourseClicked(id) {
    CourseDataService.deleteCourse(INSTRUCTOR, id).then(response => {
      this.setState({ message: `Delete of course ${id} Successful` });
      this.refreshCourses();
    });
  }

  addCourseClicked() {
    this.props.history.push(`/courses/-1`);
  }

  updateCourseClicked(id) {
    console.log("update " + id);
    this.props.history.push(`/courses/${id}`);
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <br />
        <div className="nextEach" style={{backgroundColor:"grey",padding:"5px",width:"1100px"}}>
        <Link to="/studentHome" className="btn btn-light" style={{ width: "550px",height:"50px" }}>
          <i class="fa fa-chevron-circle-left" aria-hidden="true">
            &nbsp;Back to Student Home
          </i>
        </Link> &nbsp; &nbsp; &nbsp; &nbsp;
        
        </div>
        <br/><br/><br/>
        {this.state.message && (
          <div class="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
        <h3 className="App1">All Courses</h3>

          <table className="table table-striped bg-light ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.description}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.updateCourseClicked(course.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteCourseClicked(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}

export default studentCourseList;
