import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//TODO setup redux toolkit
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//TODO set up font
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
