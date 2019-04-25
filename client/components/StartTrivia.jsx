import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const triviaCategories = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchPosts('api_category'))}>
      Fetch Posts
    </button>
    {children}
  </div>
)

export default connect()(triviaCategories)
