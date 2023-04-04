/* eslint-disable import/no-import-module-exports */
/* eslint-disable global-require */
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { isDevelopmentMode } from 'configs'
import rootReducer from './rootReducer'
import sagaManager from './sagaManager'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
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

export const persistor = persistStore(store)
export default store
