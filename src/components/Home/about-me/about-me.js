import React, { Component } from "react";
import "./about-me.css";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="about-me-main-container">
        <div className="about-me-main-text">
          <h1 className="about-me-header">About Me</h1>
          <p className="about-me-text">
            I'm a Florida-born, Tennessee native with a taste for adventure and
            a love for tech. It began with a subscription to an online game as a
            teen, and spiralled into a passion for learning the newest tech as
            fast as I can as a web developer, ten years later.{" "}
          </p>
        </div>
        <div>
          <img
            className="personal-picture"
            src={require("../../../pics/tiantemple.jpg")}
            alt="Personal Picture"
          />
        </div>
      </div>
    );
  }
}
