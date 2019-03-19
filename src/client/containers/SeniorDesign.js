import React, { Component } from "react";
import styled from "styled-components";
import Slider from "../shared/Slider";

const Container = styled.div``;

class SeniorDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }

  render() {
    return <Slider />;
  }
}

export default SeniorDesign;
