import React, { Component } from "react";
import styled from "styled-components";
import Anime from "react-anime";

const Main = styled.div`
  background: #23b8f0;
  width: 100%;
  height: 350px;
  transition: all 0.4s;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: translateY(-10px);
  }
  margin-bottom: 50px;
`;

const Cloud = styled.img`
  position: absolute;
  ${props => `
    width: ${props.size}px;
  `}
`;

const CloudOne = styled(Cloud)`
  left: -100;
  top: 10;
`;
const CloudTwo = styled(Cloud)`
  left: -100;
  top: 30;
`;
const CloudThree = styled(Cloud)`
  left: -100;
  top: 70;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Bird = styled.img`
  left: 50;
  bottom: -15;
  position: absolute;
  ${props => `
    width: ${props.size}px;
  `}
`;
const Rainbow = styled.img`
  left: -100;
  bottom: 80;
  position: absolute;
  ${props => `
    width: ${props.size}px;
  `}
`;
const Sun = styled.img`
  top: -2;
  right: 30;
  position: absolute;
  ${props => `
    width: ${props.size}px;
  `}
`;
const Tree = styled.img`
  right: 30;
  bottom: -8;
  position: absolute;
  ${props => `
    width: ${props.size}px;
  `}
  @media (max-width: 700px) {
    display: none;
  }
`;

const SeniorDesignText = styled.div`
  top: 50%;
  position: relative;
  transform: translateY(-60%);
  margin-left: 50px;
`;
const TitleText = styled.div`
  font-size: 2.5em;
  font-weight: 800;
  color: white;
`;
const DateText = styled.div`
  font-weight: 600;
  color: white;
  margin-left: 50px;
`;
class MainProject extends Component {
  render() {
    return (
      <Main>
        <Anime
          scale={1.15}
          duration={3000}
          direction={"alternate"}
          loop={true}
          easing={"linear"}
        >
          <Sun size={100} src={require("../../images/sun.svg")} />
        </Anime>
        <Anime translateX={1500} duration={50000} loop={true} easing={"linear"}>
          <Rainbow size={100} src={require("../../images/rainbow.svg")} />
        </Anime>
        <Anime translateX={1500} duration={12500} loop={true} easing={"linear"}>
          <CloudOne size={100} src={require("../../images/cloud.svg")} />
        </Anime>
        <Anime translateX={1500} duration={15000} loop={true} easing={"linear"}>
          <CloudTwo size={100} src={require("../../images/cloud.svg")} />
        </Anime>
        <Anime
          translateX={1500}
          duration={25000}
          delay={3000}
          loop={true}
          easing={"linear"}
        >
          <CloudThree size={100} src={require("../../images/cloud2.svg")} />
        </Anime>
        <Anime
          rotate={"5deg"}
          duration={3000}
          direction={"alternate"}
          loop={true}
          easing={"linear"}
        >
          <Bird size={80} src={require("../../images/bird.svg")} />
        </Anime>
        <Anime
          rotate={"5deg"}
          duration={3000}
          direction={"alternate"}
          loop={true}
          easing={"linear"}
        >
          <Tree size={150} src={require("../../images/tree.svg")} />
        </Anime>
        <SeniorDesignText>
          <TitleText>Senior Design</TitleText> <DateText>2019</DateText>
        </SeniorDesignText>
      </Main>
    );
  }
}

export default MainProject;
