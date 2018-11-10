import React, { Component } from 'react';

import Header from "app/components/header";
import AppBody from "app/components/appBody";

class TestNotImplementedScreen extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AppBody>
          Test not implemented
        </AppBody>
      </div>
    );
  }
}

export default TestNotImplementedScreen;
