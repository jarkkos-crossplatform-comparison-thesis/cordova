import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    return (
      <img
        className="backbutton"
        src={require("assets/images/backbutton.png")}
        width={24}
        height={24}
        onPointerDown={this.props.navigateBack}
        />
    );
  }
}

export default BackButton;
