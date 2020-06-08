import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClickFunction}
        key={this.props.buttonKey}
        className={this.props.classNameOfButton}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}

export default Button;
