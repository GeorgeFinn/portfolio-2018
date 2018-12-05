import React, {Component} from 'react'
import {LanguageCardContainer, LanguageImage, LanguageTitle} from '../../styles/resume.styles'
import Fade from 'react-reveal/Fade'
const LanguageCard = ({index, language}) => {
  const imgUrl = require('../../public/images/' + language + '.jpg')
  return <Fade bottom>
      <LanguageCardContainer>
        <LanguageImage src={imgUrl} alt={language} />
        <LanguageTitle>{language}</LanguageTitle>
      </LanguageCardContainer>
    </Fade>
}

export default LanguageCard
