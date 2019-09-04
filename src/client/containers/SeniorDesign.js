import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoSlide from "../shared/InfoSlide";
import StackSlide from "../shared/StackSlide";
import VisitSlide from "../shared/VisitSlide";

const BackButton = styled.img`
  height: 40px;
  margin-bottom: 10px;
  transition: all 0.4s;
  &:hover {
    transform: translateX(10px);
    cursor: pointer;
  }
`;
class SeniorDesign extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "50px" }}>
        <div style={{ margin: "50px" }}>
          <Link to="/">
            <BackButton
              src={require("../../images/icon-back.svg")}
              alt="back"
            />
          </Link>
        </div>

        <InfoSlide />
        <StackSlide />
        <VisitSlide />
      </div>
    );
  }
}

export default SeniorDesign;
