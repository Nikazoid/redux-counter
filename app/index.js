import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import allReducer from "./reducer";
import { Provider } from "react-redux"; // connects global states from store to entire app

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
