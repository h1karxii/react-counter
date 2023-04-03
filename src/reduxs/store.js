/* eslint-disable import/no-import-module-exports */
/* eslint-disable global-require */
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { isDevelopmentMode } from 'configs'
import rootReducer from './rootReducer'
import sagaManager from './sagaManager'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    logger,
  ],
})

sagaManager.startSagas(sagaMiddleware)

// HMR for reducers and sagas
if (isDevelopmentMode && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })

  module.hot.accept('./sagaManager', () => {
    sagaManager.cancelSagas(store)
    require('./sagaManager').default.startSagas(sagaMiddleware)
  })
}

export default store
