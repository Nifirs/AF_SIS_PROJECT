import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <Link
          to="/userHome"
          className="btn btn-light"
          style={{ backgroundColor: "#89888D", color: "black" }}
        >
          <i className="fa fa-chevron-circle-left" aria-hidden="true">
            &nbsp;Back to Admin-Home
          </i>
        </Link>
      </div>
    );
  }
}

export default AdminNavBar;
