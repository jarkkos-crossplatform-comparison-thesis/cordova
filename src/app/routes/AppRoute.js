import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import BackButton from "app/components/backbutton"
import Header from "app/components/header";

import ButtonLatencyScreen from "app/screens/buttonlatency";
import HeavyComputationScreen from "app/screens/heavycomputation";
import { LocalListItemsScreen, NetworkListItemsScreen } from "app/screens/listitems";
import SelectTestScreen from "app/screens/selecttest";
import ThirdPartyNoticesScreen from "app/screens/thirdpartynotices";
import VibrationLatencyScreen from "app/screens/vibrationlatency";

export default class AppRoute extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route component={RouteNameHeader} />
          <Switch>
            <Route exact path="/" component={SelectTestScreen} />
            <Route path="/buttonlatency" component={ButtonLatencyScreen} />
            <Route path="/locallist" component={LocalListItemsScreen} />
            <Route path="/networklist" component={NetworkListItemsScreen} />
            <Route path="/heavycomputation" component={HeavyComputationScreen} />
            <Route path="/vibrationlatency" component={VibrationLatencyScreen} />
            <Route path="/thirdpartynotices" component={ThirdPartyNoticesScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

class RouteNameHeader extends Component {
  render() {
    const pathname = this.props.location.pathname;
    const needsBackbutton = pathname != "/";
    return (
      <Header>
        {needsBackbutton && <BackButton navigateBack={this.props.history.goBack} />}
        <h1>
          {this.getTitleForPath(pathname)}
        </h1>
      </Header>);
  }

  getTitleForPath(pathname) {
    switch (pathname) {
      case "/buttonlatency":
        return "Button latency";
      case "/locallist":
        return "Button latency";
      case "/networklist":
        return "Button latency";
      case "/heavycomputation":
        return "Button latency";
      case "/vibrationlatency":
        return "Button latency";
      case "/thirdpartynotices":
        return "Third party notices";
      default:
        return "Thesis benchmarking";
    }
  }
}