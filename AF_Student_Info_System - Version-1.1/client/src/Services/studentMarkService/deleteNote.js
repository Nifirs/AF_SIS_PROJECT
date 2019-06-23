import React from "react";
import axios from "axios";

export default class deleteNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/notifys/all/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data._id
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5001/notifys/delete/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.props.history.push("/instructorHome");
  };

  render() {
    return (
      <div className="App1">
      <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>Course ID:</h5>
           
          </label>&nbsp;&nbsp;
          <input
              type="text"
              name="id"
              onChange={this.handleChange}
              value={this.state.id}
            />&nbsp;&nbsp;
          <button className="btn-danger" type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
