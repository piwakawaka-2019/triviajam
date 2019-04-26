import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import React, { Component } from "react";

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
        <button onClick={() => this.props.dispatch(fetchPosts("api_category"))}>
          Fetch Posts
        </button>
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
