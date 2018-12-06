import React, { Component } from 'react';

import { BackToTopButtonContainer } from '../../styles/resume.styles'

export default class BackToTopButton extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
      return <BackToTopButtonContainer title='Back to top'
               onClick={ () => { this.scrollToTop(); }}>
               Back to Top
              </BackToTopButtonContainer>;
   }
}
