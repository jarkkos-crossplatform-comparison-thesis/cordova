import React, { Component } from "react";
import "app/App.css";

export default class VibrationLatencyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="vertical-screen-center">
        <button className="wide-button" onPointerDown={this._vibrateDevice}>Click me!</button>
      </div>
    );
  }

  _vibrateDevice = () => {
    navigator.vibrate(400);
  }
}