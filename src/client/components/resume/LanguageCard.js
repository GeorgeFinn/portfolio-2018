import React, {Component} from 'react'
import {LanguageCardContainer, LanguageImage, LanguageTitle} from '../../styles/resume.styles'

const LanguageCard = ({index, language}) => {
  const imgUrl = require('../../public/images/' + language + '.jpg')
  return <LanguageCardContainer>
      <LanguageImage src={imgUrl} alt={language} />
      <LanguageTitle>{language}</LanguageTitle>
    </LanguageCardContainer>
}

export default LanguageCard
