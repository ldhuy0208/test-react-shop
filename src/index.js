import React from "react";
import dom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App.jsx";
import numberReducer from './reducers';

const store = createStore(numberReducer, applyMiddleware(thunk));


dom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
