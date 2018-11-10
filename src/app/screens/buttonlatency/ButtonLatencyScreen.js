import React, { Component } from "react";
import "app/App.css";

export default class ButtonLatencyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="vertical-screen-center">
        <button className="wide-button" onPointerDown={this._incrementCounter}>Click me!</button>
        <p className="top-margin">{this.state.counter}</p>
      </div>
    );
  }

  _incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }
}