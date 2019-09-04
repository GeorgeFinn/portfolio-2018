import React, { Component } from "react";
import styled from "styled-components";

const VisitContainer = styled.div`
  margin: 10%;
`;
const VisitLink = styled.a`
  font-size: 0.8em;
  padding-left: 30px;
`;

const VisitCard = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #23b8f0;
  transition: all 0.3s;
  overflow: hidden;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(198, 208, 235) 0px 30px 60px;
  }
`;
const VisitText = styled.h1`
  padding: 20px 40px;
  padding-top: 0px;
  color: white;
`;
const IconImage = styled.img`
  width: 50px;
  padding-left: 20px;
  padding-top: 30px;
  transition: all 0.3s;
  ${VisitCard}:hover & {
    transform: translateX(8px);
  }
`;
const CardImage = styled.img`
  width: 100%;
  margin-bottom: -5px;
  height: auto;
  transition: all 0.3s;
  ${VisitCard}:hover & {
    transform: translateY(30px);
  }
`;
class VisitSlide extends Component {
  render() {
    const imageUrl = require("../../images/seniorDesignMockUp.png");
    const iconUrl = require("../../images/arrow.svg");
    return (
      <VisitContainer>
        <VisitCard>
          <VisitLink
            href="https://career-plan.herokuapp.com"
            target="_blank"
            onClick={e => e.stopPropagation()}
          >
            <IconImage src={iconUrl} alt="arrow" />
            <VisitText>Visit Project</VisitText>
            <CardImage src={imageUrl} alt="srdesign" />
          </VisitLink>
        </VisitCard>
      </VisitContainer>
    );
  }
}

export default VisitSlide;
