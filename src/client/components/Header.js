import React, { Component } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

import {
  LogoLink,
  LogoImg,
  PageTitle,
  HeaderText,
  HeaderContainer
} from "../styles/Header.styles.js";

const Header = ({ pageTitle, headerText, theme }) => {
  const imageUrl = require(`../../images/georgefinn-${theme.name}.svg`);
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImg src={imageUrl} />
      </LogoLink>
      <PageTitle>{pageTitle}</PageTitle>
      <HeaderText>{headerText}</HeaderText>
    </HeaderContainer>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired
};

export default withTheme(Header);
