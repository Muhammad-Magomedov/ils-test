import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/index"

const sagaMidlleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(applyMiddleware(sagaMidlleware), reduxDevTools) : applyMiddleware(sagaMidlleware);

export const store = createStore(rootReducer, middleware);