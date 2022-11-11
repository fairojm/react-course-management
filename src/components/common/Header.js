import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "white",
    "text-decoration": "underline",
    "font-weight": "bold",
  };
  return (
    // <nav className="container-fluid">
    //     <NavLink className="nav-link"  aria-disabled="false" to="/">Home</NavLink> |
    // <NavLink className="nav-link"  aria-disabled="false" to="/about">About</NavLink>
    // </nav>

    <nav className="navbar navbar-expand-sm navbar-light bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" style={{ color: "#d7fffe" }} to="/">
          Course Management
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav">
            <NavLink
              end
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link active"
              aria-current="page"
              to="/courses"
            >
              Courses
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link active"
              aria-current="page"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
