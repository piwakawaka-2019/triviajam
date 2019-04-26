import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class StartTrivia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // mapStateToProps(state)
  render() {
    console.log(this.state);
    return (
      <div>
        <Link to="/trivia">
          <button
            onClick={() => this.props.dispatch(fetchPosts("api_category"))}
          >
            Take Quiz
          </button>
        </Link>
      </div>
    );
  }
}
export default connect()(StartTrivia);

// export default StartTrivia;

// const triviaCategories = ({ children, dispatch }) => (
//   <div>
//     <button onClick={() => dispatch(fetchPosts("api_category"))}>
//       Fetch Posts
//     </button>
//   </div>
// );
