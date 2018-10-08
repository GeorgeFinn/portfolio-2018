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

export const GridContainer = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`
