import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { absolute } from "../Utilities";
const BackButton = styled.img`
  height: 40px;
  margin-bottom: 10px;
  transition: all 0.4s;
  ${absolute};
  z-index: 11;
  padding: 20px;
  &:hover {
    transform: translateX(10px);
  }
`;

const SmartHomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: 800;
  font-size: 1em;
`;

const SmartHomeCard = styled.div`
  width: 80%;
  color: white;
  border-radius: 25px;
  background-color: #ee0979;
  transition: all 0.3s;
  overflow: hidden;
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(198, 208, 235) 0px 30px 60px;
  }
`;
const MockImage = styled.img`
  height: 50%;
  min-height: 300px;
  padding-left: 25px;
  transition: all 0.3s;
  ${SmartHomeCard}:hover & {
    transform: translateY(30px);
  }
`;

const TitleText = styled.h1`
  margin-top: 80px;
`;
class SmartHome extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <BackButton src={require("../../images/icon-back.svg")} alt="back" />
        </Link>
        <SmartHomeContainer>
          <SmartHomeCard>
            <TitleText>Workin' on making my home smart...</TitleText>
            <MockImage
              src={require("../../images/SmartHomeMockUps.png")}
              alt="mock"
            />
          </SmartHomeCard>
        </SmartHomeContainer>
      </>
    );
  }
}

export default SmartHome;
