import React, { Component } from "react";
import axios from "axios";

export default class editNote extends React.Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/notifys/all/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          NoteDate: response.data.NoteDate,
          NoteSub: response.data.NoteSub,
          Note: response.data.Note,
          completed: response.data.completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

    const obj = {
      NoteDate: this.state.NoteDate,
      NoteSub: this.state.NoteSub,
      Note: this.state.Note,
      completed: this.state.completed
    };
    axios
      .post(
        "http://localhost:5000/notifys/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/viewNotice");
  }



  render() {
    return (
      <div >
      <br/>
        <h2 style={{color:"white",width:"700px"}}>Edit Notices</h2><br/>
        <form onSubmit={this.onSubmit} style={{color:"white",width:"700px"}}>
          <div className="form-group " align="left">
            <label style={{ color: "white" }}>Note Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.NoteDate}
              onChange={this.changeNoteDate}
            />
            <br />
          </div>
          <div className="form-group" align="left">
            <label style={{ color: "white" }}>Note Subject </label>
            <input
              type="text"
              className="form-control"
              value={this.state.NoteSub}
              onChange={this.changeNoteSub}
            />
            <br />
          </div>
          <div className="form-group" align="left">
            <label style={{ color: "white" }}>Note </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Note}
              onChange={this.changeNote}
            />
            <br />
          </div>
          <div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Update Note"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
