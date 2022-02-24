import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";
import rootSagas from "./root-saga";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const middlewaresEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewaresEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);

// run saga
sagaMiddleware.run(rootSagas);
