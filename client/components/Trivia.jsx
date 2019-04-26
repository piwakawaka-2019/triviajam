import React, { Component } from "react";
import { connect } from "react-redux";
class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h1>{this.props.data[0].question}</h1> */}

        <form>
          {this.props.data.map(item => {
            // question
            return (
              <div>
                <h2>{item.question}</h2>
                <fieldset id={item.question}>
                  <label for="A">A. {item.correct_answer}</label>
                  <input type="radio" value={item.correct_answer} id="A" />
                  <label for="B">B. {item.incorrect_answers[0]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[0]}
                    id="B"
                  />
                  <label for="C">C. {item.incorrect_answers[1]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[1]}
                    id="C"
                  />
                  <label for="D">D. {item.incorrect_answers[2]}</label>
                  <input
                    type="radio"
                    value={item.incorrect_answers[2]}
                    id="D"
                  />
                </fieldset>
              </div>
            );
          })}
          <button type="submit">Submit</button>
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
