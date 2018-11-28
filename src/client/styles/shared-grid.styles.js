import styled from 'styled-components'

export const HeaderContainer = styled.div`
  grid-area: 'header';
  margin-top: 100px;
`

export const ContentContainer= styled.div`
  grid-area: 'main';
`

export const FooterContainer = styled.div`
  grid-area: 'footer';
  height: 100px;
`

export const PortfolioContainer = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`

export const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const AboutContainer = styled.div`
  margin-bottom: 250px;
`

export const CourseworkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-bottom: 250px;
`

export const LanguagesContainer = styled.div`
  margin-bottom: 250px;
`

export const LanguagesGridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 225px;
`
