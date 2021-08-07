import React, { Component } from 'react';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <button
        className="btn btn-primary"
        onClick={() => this.setState({ renderError: true })}
      >
        error trigger
      </button>
    );
  }
}
