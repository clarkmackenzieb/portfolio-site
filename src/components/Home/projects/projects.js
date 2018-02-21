import React, { Component } from "react";
import "./projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projects-main-container">
        <div className="projects-header">
          <h1 id="projects">Projects</h1>
        </div>
        <div className="projects-card-container">
          <a href="http://mybudgetbuddy.net/">
            <div className="project-card budget-background">
              <div className="project-tech">
                <h6>Budget Buddy</h6>
                <p>React, Node, Express, MaterialUI</p>
              </div>
            </div>
          </a>
          <a href="http://thedogspot.life">
            <div className="project-card dogspot-background">
              <div className="project-tech">
                <h6>The Dog Spot</h6>
                <p>SQL, Angular, Node, Express, jQuery</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/MeetupClone/Gather">
            <div className="project-card gather-background">
              <div className="project-tech">
                <h6>Gather</h6>
                <p>React, Redux, Express, SQL</p>
              </div>
            </div>
          </a>
          <a href="http://clarkmackenzieb.github.io">
            <div className="project-card tic-tac-toe-background">
              <div className="project-tech">
                <h6>Tic Tac Toe</h6>
                <p>Vanilla Javascript, HTML, CSS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
