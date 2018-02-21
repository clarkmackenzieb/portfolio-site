import React, { Component } from "react";
import "./navbar.css";

import pdf from "./resume.pdf";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="list-container">
          <ul className="navbar-nav navbar-lists">
            <a href="#projects">
              <li className="nav-item">Projects</li>
            </a>
            <a href="#skills">
              <li className="nav-item">Skills</li>
            </a>
            <a href={pdf}>
              <li>Resume</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
