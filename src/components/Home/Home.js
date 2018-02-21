import React, { Component } from "react";

import Header from "./header/header";
import AboutMe from "./about-me/about-me";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}
