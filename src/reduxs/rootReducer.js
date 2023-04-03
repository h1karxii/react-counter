import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counter/counterRedux'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
