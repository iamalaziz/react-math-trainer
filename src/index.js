import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProblemsProvider from "./context/problems-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProblemsProvider>
        <App />
      </ProblemsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
