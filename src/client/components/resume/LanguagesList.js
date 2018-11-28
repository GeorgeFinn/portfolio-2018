import React, {Component} from 'react'
import { LanguagesGridContainer } from '../../styles/shared-grid.styles'
import LanguageCard from './LanguageCard'

const LanguagesList = ({languages}) => {
  const languageItems = languages.map((language, i) => <LanguageCard index={i} key={language} language={language}/>)
  return <LanguagesGridContainer>{languageItems}</LanguagesGridContainer>
}

export default LanguagesList
