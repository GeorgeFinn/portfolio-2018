import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const LogoLink = styled(Link)`
  display: inline-block;
  margin-bottom: 80px;
`
const LogoImg = styled.img`
  height: 38px;
`


const PageTitle = styled.div`
  font-weight: 300;
  color: #8E9AA7;
  opacity: 0.5;
  font-size: 1.2em;
  margin-bottom: 10px;
`

const HeaderText = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 40px;
`

const Header = ({pageTitle, headerText}) => {
  return (
    <Fade top>
      <LogoLink to='/'>
        <LogoImg src='https://s3.us-east-2.amazonaws.com/georgefinn-portfolio/georgefinn.svg'/>
      </LogoLink>
      <PageTitle>{pageTitle}</PageTitle>
      <HeaderText>{headerText}</HeaderText>
    </Fade>

  )
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired
}

export default Header
