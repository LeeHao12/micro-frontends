import React from "react";
import ReactDOM from "react-dom";
import QK from "./micro";
import App from "./App";

import "./index.css";

QK();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("main-app")
);
