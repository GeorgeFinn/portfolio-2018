import React, { Component } from "react";
import styled from "styled-components";
import TextTransition from "react-text-transition";

const ScrollTextContainer = styled.div`
  margin: 0;
  display: inline-block;
`;

const ScrollTextItem = styled.div`
  color: ${props => props.theme.secondary};
  font-weight: 700;
`;

class ScrollText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ active: this.state.active + 1 });
  }
  render() {
    const { texts } = this.props;
    return (
      <ScrollTextContainer>
        <ScrollTextItem>
          <TextTransition
            style={{ height: "auto" }}
            text={texts[this.state.active % texts.length]}
          />
        </ScrollTextItem>
      </ScrollTextContainer>
    );
  }
}

export default ScrollText;
