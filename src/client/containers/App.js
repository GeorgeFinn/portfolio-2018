import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import * as suncalc from "suncalc";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

import { lightTheme, darkTheme } from "../themes/default";

let count = 0;

class App extends Component {
  constructor(props) {
    super(props);
    const { sunrise, sunset } = suncalc.getTimes(Date.now(), 41.9, -91.6);
    this.state = {
      theme: lightTheme,
      time: Date.now(),
      sunrise: sunrise,
      sunset: sunset
    };
  }

  componentDidMount() {
    this.updateTheme();
    // this.intervalID = setInterval(() => this.updateTheme(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  updateTheme() {
    const time = Date.now();
    if (time > this.state.sunrise && time < this.state.sunset) {
      this.setState({
        time: time,
        theme: lightTheme
      });
    } else {
      this.setState({
        time: time,
        theme: darkTheme
      });
    }
  }

  toggleThemeChange = e => {
    count++;
    count % 2 === 1
      ? this.setState({ theme: darkTheme })
      : this.setState({ theme: lightTheme });
  };
  render() {
    const { children } = this.props;
    const { theme } = this.state;

    WebFont.load({
      google: {
        families: ["Montserrat:300,400,600,700", "sans-serif"]
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
        width: 100vw;
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
    `;

    return (
      <ThemeProvider theme={theme}>
        <main style={{ backgroundColor: this.state.theme.bg, height: "auto" }}>
          {children}
          <GlobalStyle />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
