import React, { Component } from "react";
import { connect } from "react-redux";
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>You got: 4/10</h1>
      </div>
    );
  }
}

export default connect()(Results);
