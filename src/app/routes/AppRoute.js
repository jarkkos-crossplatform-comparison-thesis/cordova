import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ButtonLatencyScreen from "app/screens/buttonlatency";
import HeavyComputationScreen from "app/screens/heavycomputation";
import { LocalListItemsScreen, NetworkListItemsScreen } from "app/screens/listitems";
import SelectTestScreen from "app/screens/selecttest";
import TestNotImplemented from "app/screens/TestNotImplementedScreen";
import VibrationLatencyScreen from "app/screens/vibrationlatency";

export default class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SelectTestScreen} />
          <Route path="/buttonlatency" component={ButtonLatencyScreen} />
          <Route path="/locallist" component={LocalListItemsScreen} />
          <Route path="/networklist" component={NetworkListItemsScreen} />
          <Route path="/heavycomputation" component={HeavyComputationScreen} />
          <Route path="/vibrationlatency" component={VibrationLatencyScreen} />
          <Route path="/thirdpartynotices" component={TestNotImplemented} />
        </Switch>
      </Router>
    );
  }
}