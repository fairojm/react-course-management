/**EXAMPLE WITH CLASS */
import React from "react";
import { Link } from "react-router-dom";

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="p-5 m-2">
        <h3>I am about Page</h3>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}
