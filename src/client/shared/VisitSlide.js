import React, { Component } from "react";
import styled from "styled-components";

const VisitContainer = styled.div`
  padding: 100px;
  @media (max-width: 700px) {
    padding: 70px;
  }
  @media (max-width: 500px) {
    padding-left: 70px;
    padding-right: 40px;
  }
`;
const VisitLink = styled.a`
  transition: color 0.3s;
  &:hover {
    color: #23b8f0;
  }
`;

class VisitSlide extends Component {
  render() {
    return (
      <VisitContainer>
        <VisitLink
          href="https://career-plan.herokuapp.com"
          target="_blank"
          onClick={e => e.stopPropagation()}
        >
          <h1>Visit Project</h1>
        </VisitLink>
      </VisitContainer>
    );
  }
}

export default VisitSlide;
