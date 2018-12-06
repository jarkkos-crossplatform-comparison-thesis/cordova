import React, { Component } from "react";

import "app/App.css";
import AppBody from "app/components/appBody";

export default class VibrationLatencyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <AppBody>
      <div className="vertical-screen-center">
        <button className="wide-button" onTouchStart={this._vibrateDevice}>Click me!</button>
      </div>
      </AppBody>
    );
  }

  _vibrateDevice = () => {
    navigator.vibrate(400);
  }
}