import createSagaMiddleware from "@redux-saga/core";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { history } from "../utils";
import { rootReducer } from "./root-reducer";
import rootSagas from "./root-saga";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];
const middlewaresEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewaresEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

// create persistedReducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, composedEnhancers);
  sagaMiddleware.run(rootSagas);
  let persistor = persistStore(store);
  return { store, persistor };
};
