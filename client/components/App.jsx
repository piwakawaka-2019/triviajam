import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import StartTrivia from "./StartTrivia";
import Results from "./Results";
import Trivia from "./Trivia";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // mapStateToProps(state) {
  //   return {

  //   }
  // }

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={StartTrivia} />
          <Route exact path="/trivia" component={Trivia} />
          <Route exact path="/results" component={Results} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
