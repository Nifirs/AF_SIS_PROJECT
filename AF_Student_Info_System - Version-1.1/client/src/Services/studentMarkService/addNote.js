import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class addNote extends React.Component {
  constructor(props) {
    super(props);

    this.changeNoteDate = this.changeNoteDate.bind(this);
    this.changeNoteSub = this.changeNoteSub.bind(this);
    this.changeNote = this.changeNote.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      NoteDate: "",
      NoteSub: "",
      Note: "",
      completed: false
    };
  }
  changeNoteDate(e) {
    this.setState({
      NoteDate: e.target.value
    });
  }

  changeNoteSub(e) {
    this.setState({
      NoteSub: e.target.value
    });
  }
  changeNote(e) {
    this.setState({
      Note: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Note Date :${this.state.NoteDate}`);
    console.log(`Note Sub :${this.state.NoteSub}`);
    console.log(`Note :${this.state.Note}`);
    console.log(`Course Fee :${this.state.completed}`);

    const newNote = {
      NoteDate: this.state.NoteDate,
      NoteSub: this.state.NoteSub,
      Note: this.state.Note,
      completed: this.state.completed
    };
    axios
      .post("http://localhost:5000/notifys/add", newNote)
      .then(res => console.log(res.data));

    this.setState({
      NoteDate: "",
      NoteSub: "",
      Note: "",
      completed: false
    });
  }

  render() {
    return (
      <div style={{ background: "grey" }}>
        <div
          style={{
            
          }}
        >
          <pre>
            {" "}
            <h2 style={{ color: "black" }}>Add Notices</h2>
            <form onSubmit={this.onSubmit}>
              <div>
                <div className="form-group" align="left">
                  <label style={{ color: "black" }}>Note Date: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.NoteDate}
                    onChange={this.changeNoteDate}
                    
                  />
                  <br />
                </div>
                <div className="form-group" align="left">
                  <label style={{ color: "black" }}>Note Subject </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.NoteSub}
                    onChange={this.changeNoteSub}
                    
                  />
                  <br />
                </div>
                <div className="form-group" align="left">
                  <label style={{ color: "black" }}>Note </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.Note}
                    onChange={this.changeNote}
                    
                  />
                  <br />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Add Notice"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </pre>
        </div>
      </div>
    );
  }
}
