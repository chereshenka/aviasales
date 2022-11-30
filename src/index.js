import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/root-reducer";
import "./index.scss";
import App from "./components/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
