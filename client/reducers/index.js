import {combineReducers} from 'redux'

import errorMessage from './error-message'
import results from './results'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
 results,
  waiting
})
