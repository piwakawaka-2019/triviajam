import {RECEIVE_POSTS} from '../actions'

function results (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.results

    default:
      return state
  }
}

export default results