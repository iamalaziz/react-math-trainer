import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ProblemsProvider from "./context/problems-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ProblemsProvider>
      <App />
    </ProblemsProvider>
  </HashRouter>
);
