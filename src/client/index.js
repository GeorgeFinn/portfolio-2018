import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import App from "./containers/App";
import Portfolio from "./containers/Portfolio"
import Resume from './containers/Resume'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,600,700', 'sans-serif']
  }
});

const GlobalStyle = createGlobalStyle`
  main, html, body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Roboto,"Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    width: 80vw;
    -webkit-overflow-scrolling: touch;
  }
  a {
    color:#000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: $light_blue;
    }
  }
`

ReactDom.render(
    <Router>
      <Fragment>
        <App>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </App>
        <GlobalStyle />
      </Fragment>
    </Router>,
  document.getElementById("app")
);



module.hot.accept();
