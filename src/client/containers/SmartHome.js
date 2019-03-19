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
    cursor: pointer;
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
class SmartHome extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <BackButton src={require("../../images/icon-back.svg")} alt="back" />
        </Link>
        <SmartHomeContainer>
          <h1>Workin' on making my home smart...</h1>
        </SmartHomeContainer>
      </>
    );
  }
}

export default SmartHome;
