import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";
import Routes from "./Routes";

ReactDom.render(
  <Router>
    <Fragment>
      <App>
        <Routes />
      </App>
    </Fragment>
  </Router>,
  document.getElementById("react-root")
);
