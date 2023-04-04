/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit'
import { takeLatest, take, put, all, delay, fork } from 'redux-saga/effects'

/**
 * ------------ Action ------------
 */

export const actionTypes = {
  SET_COUNTER: 'SET_COUNTER',
  INCREMENT_START: 'INCREMENT_START',
  INCREMENT_SUCCESS: 'INCREMENT_SUCCESS',
  DECREMENT_START: 'DECREMENT_START',
  DECREMENT_SUCCESS: 'DECREMENT_SUCCESS',
}

/**
 * ------------ Action Creators ------------
 *
 * const acitonCreator = createAction(actionType)(payload)
 *
 * == The same as below ==
 *
 * const actionCreator = () => ({type: actionType, payload: payload})
 */

export const setCounter = createAction(actionTypes.SET_COUNTER)

export const incrementStart = createAction(actionTypes.INCREMENT_START)

export const incrementSuccess = createAction(actionTypes.INCREMENT_SUCCESS)

export const decrementStart = createAction(actionTypes.DECREMENT_START)

export const decrementSuccess = createAction(actionTypes.DECREMENT_SUCCESS)

/**
 * ------------ Reducers ------------
 * createReducer(initialState, Case Reducers)
 * You can mutate the state if you want because immutability will be handled by immer behind the scene
 */

const counterReducer = createReducer({ number: 0 }, (builder) => {
  builder
    .addCase(setCounter, (state, action) => {
      state.number = action.payload
    })
    .addCase(incrementSuccess, (state, action) => {
      state.number += action.payload
    })
    .addCase(decrementSuccess, (state, action) => {
      state.number -= 20
    })
})

export default counterReducer

/**
 * ------------ Saga Workers ------------
 */

export function* incrementAsync(payload) {
  yield delay(1000)
  yield put(incrementSuccess(payload))
}

export function* decrementAsync() {
  yield delay(1000)
  yield put(decrementSuccess())
}

/**
 * ------------ Saga Watchers ------------
 */

export function* onIncrement() {
  while (true) {
    const { payload } = yield take(actionTypes.INCREMENT_START)
    yield fork(incrementAsync, payload)
  }
}

export function* onDecrement() {
  yield takeLatest(actionTypes.DECREMENT_START, decrementAsync)
}

export function* counterSagas() {
  yield all([fork(onIncrement), fork(onDecrement)])
}
