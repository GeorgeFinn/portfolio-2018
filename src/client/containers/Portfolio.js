import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import ProjectList from "../components/ProjectList";
import MainProject from "../components/MainProject";
import SmartHomeProject from "../components/SmartHomeProject";
import Footer from "../components/Footer";
import {
  PortfolioContainer,
  HeaderContainer,
  ContentContainer,
  FooterContainer
} from "../styles/shared-grid.styles";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  render() {
    const pageTitle = "portfolio";
    const headerText = "Welcome to my playground";
    const buttonTitle = "View Resume";
    const iconUrl = require("../../images/arrow.svg");

    return (
      <PortfolioContainer>
        <HeaderContainer>
          <Header pageTitle={pageTitle} headerText={headerText} />
          <GradientButton url="/resume" title={buttonTitle} iconUrl={iconUrl} />
        </HeaderContainer>
        <ContentContainer>
          <Link to="/seniordesign">
            <MainProject />
          </Link>
          <Link to="smarthome">
            <SmartHomeProject />
          </Link>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </PortfolioContainer>
    );
  }
}

export default Portfolio;
