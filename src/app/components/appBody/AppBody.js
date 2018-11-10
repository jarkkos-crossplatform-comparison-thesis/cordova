import React, { Component } from 'react';

class AppBody extends Component {
  render() {
    return (
      <div className="app-body">
        {this.props.children}
      </div>
    );
  }
}

export default AppBody;
