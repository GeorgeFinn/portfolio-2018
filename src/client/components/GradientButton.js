import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonContainer = styled(Link)`
  background-image: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
  background-size: 200% auto;
  transition: all .5s;
  padding: 20px 25px;
  border-radius: 10px;
  margin-bottom: 100px;
  display: inline-block;
  vertical-align: middle;
  &:hover {
      background-position: right center;
    }
`
const ButtonImage = styled.img`
  vertical-align: middle;
  transition: all .5s;
  ${ButtonContainer}:hover & {
    transform: translateX(10px);
  }
`

const TitleText= styled.div`
    display: inline-block;
    color: white;
    font-weight: 200;
    font-size: 1em;
    margin-right: 40px;
`

const GradientButton = ({ title, iconUrl }) => (
  <ButtonContainer to='/resume'>
    <TitleText>
      {title}
    </TitleText>
    <ButtonImage src={iconUrl} styles={{ fill: '#000'}} />
  </ButtonContainer>
);

export default GradientButton
