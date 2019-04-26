import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(e) {
    this.setState({
      [e.target.results]: e.target.results
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {/* <h1>{this.props.data[0].question}</h1> */}

        <form onChange={this.handleChange}>
          {this.props.data.map(item => {
            // question
            return (
              <div>
                <h2>{item.question}</h2>
                <fieldset id={item.question}>
                  <label for="A">A. {item.correct_answer}</label>
                  <input
                    type="radio"
                    value={item.correct_answer}
                    id="A"
                    name={item.question}
                  />
                  <label for="B">B. {item.incorrect_answers[0]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[0]}
                    id="B"
                    name={item.question}
                  />
                  <label for="C">C. {item.incorrect_answers[1]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[1]}
                    id="C"
                    name={item.question}
                  />
                  <label for="D">D. {item.incorrect_answers[2]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[2]}
                    id="D"
                    name={item.question}
                  />
                </fieldset>
              </div>
            );
          })}
          <Link to="/results">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.subreddits
  };
}

export default connect(mapStateToProps)(Trivia);
