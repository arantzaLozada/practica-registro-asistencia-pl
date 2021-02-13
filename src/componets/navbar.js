import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

class navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="a-color" to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default navbar;
