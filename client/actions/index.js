import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (results) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        console.log(res.body)
        dispatch(receivePosts(res.body.results))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}