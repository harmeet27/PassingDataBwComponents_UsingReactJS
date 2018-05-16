import React, { Component } from "react";
import ReactDOM from "react-dom";

import Details from "./Details";
import Test from "./Test";

let courses = ["java", "CSS"];

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>ReactJS 2 </h1>
        <Details mycourses={courses} valuecount={9} />
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
