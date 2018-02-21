import React, { Component } from "react";
import "./skills.css";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-skills-container">
        <div className="skills-header">
          <h1 id="skills">Skills</h1>
        </div>
        <div className="skills-indiv-container">
          <div className="indiv-skill">ReactJS</div>
          <div className="indiv-skill">Redux</div>
          <div className="indiv-skill">SQL</div>
          <div className="indiv-skill">Node</div>
          <div className="indiv-skill">Express</div>
          <div className="indiv-skill">AngularJS</div>
          <div className="indiv-skill">RESTful API</div>
          <div className="indiv-skill">Async Javascript</div>
          <div className="indiv-skill">HTML</div>
          <div className="indiv-skill">CSS</div>
          <div className="indiv-skill">ES6</div>
          <div className="indiv-skill">Git</div>
          <div className="indiv-skill">Bootstrap</div>
          <div className="indiv-skill">JQuery</div>
          <div className="indiv-skill">Material UI</div>
        </div>
      </div>
    );
  }
}
