import React, { Component } from "react";
import "app/App.css";

import WebWorker from "app/util/WebWorker";
import findPrimesWorker from "./findPrimes";

export default class HeavyComputationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      computationStatus: "idle",
    };
  }

  componentWillUnmount() {
    this._unsubscribeFromWorker();
  }

  render() {
    return (
      <div className="vertical-screen-center">
        <button className="wide-button" onPointerDown={this._startComputation}>Click me!</button>
        <p className="top-margin">{this._renderStatus()}</p>
      </div>
    );
  }

  _renderStatus() {
    const { computationStatus } = this.state;
    if (computationStatus == "idle") {
      return <span>Click to start</span>;
    }
    else if (computationStatus == "computing") {
      return <progress></progress>;
    }
    else {
      return <span>Done</span>;
    }
  }
  
  _startComputation = () => {
    this._unsubscribeFromWorker();

    const worker = new WebWorker(findPrimesWorker);
    worker.addEventListener("message", this._computationFinishListener);
    worker.postMessage(3000000);

    this.setState({
      computationStatus: "computing",
      computationWorker: worker
    });
  }

  _computationFinishListener = () => {
    this.setState({
      computationStatus: "done",
      computationPromise: undefined
    });
  }

  _unsubscribeFromWorker = () => {
    if (this.state.computationWorker) {
      this.state.computationWorker.removeEventListener("message", this._computationFinishListener);
      this.state.computationWorker.terminate();
    }
  }
}