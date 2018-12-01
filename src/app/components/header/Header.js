import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        {this.props.children}
      </div>
    );
  }
}

export default Header;
