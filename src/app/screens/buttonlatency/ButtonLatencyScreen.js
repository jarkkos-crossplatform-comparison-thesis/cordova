import React, { Component } from "react";

import "app/App.css";
import AppBody from "app/components/appBody";

export default class ButtonLatencyScreen extends Component {
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
          <button className="wide-button" onTouchStart={this._incrementCounter}>Click me!</button>
        <p className="top-margin">{this.state.counter}</p>
      </div>
      {this._renderFooter()}
      </AppBody>
    );
  }

  _renderFooter() {
    return <div className="footer greenBg"></div>
  }

  _incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }
}