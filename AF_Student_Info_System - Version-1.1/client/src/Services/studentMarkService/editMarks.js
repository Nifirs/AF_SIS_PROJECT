import React, { Component } from "react";
import axios from "axios";

export default class editMarks extends React.Component {
  constructor(props) {
    super(props);

    this.changeSubject = this.changeSubject.bind(this);
    this.changeRegNo = this.changeRegNo.bind(this);
    this.changeMarks = this.changeMarks.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Subject: "",
      RegNo: "",
      Marks: "",
      completed: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/notifys/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          Subject: response.data.Subject,
          RegNo: response.data.RegNo,
          Marks: response.data.Marks,
          completed: response.data.completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  changeSubject(e) {
    this.setState({
      Subject: e.target.value
    });
  }

  changeRegNo(e) {
    this.setState({
      RegNo: e.target.value
    });
  }
  changeMarks(e) {
    this.setState({
      Marks: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newMark = {
      Subject: this.state.Subject,
      RegNo: this.state.RegNo,
      Marks: this.state.Marks,
      completed: this.state.completed
    };
    axios
      .post(
        "http://localhost:5000/notifys/mUpdate/" + this.props.match.params.id,
        newMark
      )
      .then(res => console.log(res.data));

    this.props.history.push("/viewMarks");
  }

  render() {
    return (
      <div>
      <br/>
        <h2 style={{color:"white",width:"700px"}}>Edit Marks</h2><br/>
        <form onSubmit={this.onSubmit} style={{color:"white",width:"700px"}} className="App">
          <div className="form-group" align="left">
            <label style={{ color: "white" }}>Subject </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Subject}
              onChange={this.changeSubject}
            />
            <br />
          </div>
          <div className="form-group" align="left">
            <label style={{ color: "white" }}>Register No </label>
            <input
              type="text"
              className="form-control"
              value={this.state.RegNo}
              onChange={this.changeRegNo}
            />
            <br />
          </div>
          <div className="form-group" align="left">
            <label style={{ color: "white" }}>Marks </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Marks}
              onChange={this.changeMarks}
            />
            <br />
          </div>
          <div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Update Course"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
