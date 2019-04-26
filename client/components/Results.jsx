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
        <p>here34</p>
      </div>
    );
  }
}

export default connect()(Results);
