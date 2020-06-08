import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClickFunction}
        className={this.props.classNameOfButton}
        disabled={this.props.isDisabled}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}

export default Button;
