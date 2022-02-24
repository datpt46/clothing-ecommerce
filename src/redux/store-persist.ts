import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";
import rootSagas from "./root-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const middlewaresEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewaresEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

// create persistedReducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, composedEnhancers);
  sagaMiddleware.run(rootSagas);
  let persistor = persistStore(store);
  return { store, persistor };
};
