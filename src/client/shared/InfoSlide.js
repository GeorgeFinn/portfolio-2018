import React, { Component } from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 100px;
  @media (max-width: 700px) {
    padding: 70px;
  }
  @media (max-width: 500px) {
    padding-left: 70px;
    padding-right: 40px;
  }
`;

class InfoSlide extends Component {
  render() {
    return (
      <InfoContainer>
        <h1 style={{ color: "#23b8f0" }}>Career Planner</h1>
        <h2>
          When job seeking, comparing opportunities can be time consuming and
          frustrating. We created a web application which allows users to
          calculate and compare career opportunities. Career Planner utilizes
          data from thousands of careers, locations and colleges to calculate
          the best plans.
        </h2>
      </InfoContainer>
    );
  }
}

export default InfoSlide;
