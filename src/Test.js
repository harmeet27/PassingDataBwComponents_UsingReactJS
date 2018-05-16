import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>this is test from test</h1>
          <h2>{this.props.mytest}</h2>
        </header>
      </div>
    );
  }
}

export default Test;
