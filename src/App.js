import React, { Component } from "react";
import logo from "./logo.svg";
import Clock from "react-clock";
import "./App.css";

class AnalogClock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div>
         <header className="App-header">
        <Clock className="clock" size='720' renderNumbers={true} value={this.state.date}></Clock>
        </header>
      </div>
    );
  }
}


export default AnalogClock;
