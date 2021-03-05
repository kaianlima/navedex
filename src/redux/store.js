import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import storage from "redux-persist/lib/storage"

import rootReducer from "./root-reducer"
import rootSaga from "./root-saga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor }
