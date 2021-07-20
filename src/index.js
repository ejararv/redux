import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, compose,applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const AppProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(
  <React.StrictMode>{AppProvider}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
