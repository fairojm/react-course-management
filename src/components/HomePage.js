import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-5 mb-1 bg-light text-dark">
      <h1 className="container">React</h1>
      <p>Course Management</p>
      <Link className="btn btn-primary" to="/courses">
        Add/View Courses
      </Link>
    </div>
  );
};

export default HomePage;
