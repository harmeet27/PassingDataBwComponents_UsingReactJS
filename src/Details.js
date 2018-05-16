import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "./Test";

const plus = {
  marginRight: "10px"
};

const minus = {
  marginLeft: "10px"
};

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { total: this.props.valuecount };
    this.increasevalue = this.increasevalue.bind(this);
    this.decreasevalue = this.decreasevalue.bind(this);
  }

  increasevalue() {
    this.setState({
      total: this.state.total + 1
    });
  }

  decreasevalue() {
    this.setState({
      total: this.state.total - 1
    });
  }
  render() {
    const mydataelemnets = this.props.mycourses.map(function(element, index) {
      return <li key={index}>{element}</li>;
    });
    return (
      <div>
        >
        <h1>details component</h1>
        <p>{this.props.title}</p>
        <ul>{mydataelemnets}</ul>
        <h1>State Introductions</h1>
        <span style={plus} onClick={this.increasevalue}>
          +
        </span>
        <span>{this.state.total}</span>
        <span style={minus} onClick={this.decreasevalue}>
          -
        </span>
        <Test mytest={this.props.title} />
      </div>
    );
  }
}

export default Details;
