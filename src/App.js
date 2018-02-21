import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
