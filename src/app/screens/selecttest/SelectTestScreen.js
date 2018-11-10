import React, { Component } from 'react';
import logo from 'assets/images/reactlogo.svg';
import 'app/App.css';

import Header from "app/components/header";
import AppBody from "app/components/appBody";

class SelectTestScreen extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AppBody>
          {this._renderAppInfo()}
          {this._renderNavigationButtons()}
        </AppBody>
      </div>
    );
  }

  _renderAppInfo() {
    return (
      <div className="appinfo-row">
        <img className="appinfo-column" src={logo} alt="react logo" width={80} height={80} />
        <div className="appinfo-column">
          <div><strong>Cordova w/ ReactJS</strong></div>
          <div><strong>Version whatever</strong></div>
          <div><strong>Select test</strong></div>
        </div>
        <img className="appinfo-column" src={logo} alt="react logo" width={80} height={80} />
      </div>
    );
  }

  _renderNavigationButtons() {
    const renderButton = (title, onPressIn) => (
      <button className="wide-button double-top-margin" onClick={onPressIn}>{title}</button>
    );

    return (
      <div>
        {renderButton("Button latency", () => { this.props.history.push("/buttonlatency")})}
        {renderButton("Local listview", () => { this.props.history.push("/locallist")})}
        {renderButton("Network listview", () => { this.props.history.push("/networklist")})}
        {renderButton("Heavy computation", () =>{ this.props.history.push("/vibrationlatency")})}
        {renderButton("Vibration latency", () => { this.props.history.push("/vibrationlatency")})}
        {renderButton("Third party notices", () => { this.props.history.push("/thirdpartynotices")})}
      </div>
    );
  }
}

export default SelectTestScreen;
