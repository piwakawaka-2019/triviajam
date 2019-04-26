import {RECEIVE_POSTS} from '../actions'

function results (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    default:
      return state
  }
}

export default results