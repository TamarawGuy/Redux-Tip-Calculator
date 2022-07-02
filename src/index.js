import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Theme } from "@twilio-paste/core/theme";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>
);
