import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"; // TODO: switch to BrowserRouter for production
import App from "./containers/app/app";
import "./styles/base.scss";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("root")
  );
});
