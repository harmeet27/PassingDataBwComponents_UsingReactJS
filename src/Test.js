import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>this is test</h1>
          <h1>{this.props.mytest}</h1>
        </header>
      </div>
    );
  }
}

export default Test;
