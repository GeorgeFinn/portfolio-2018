import styled from 'styled-components'

export const CourseCardContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  border-radius: 14px;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
  align-items: center;
  margin-bottom: 15px;
`

export const CourseCardLeft = styled.div`
  text-align: center;
  color: #3BDFD2;
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const CourseCardRight = styled.div`
  font-weight: normal;
`

export const LanguageCardContainer = styled.div`
  text-align: center;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
`

export const LanguageImage = styled.img`
  transition: all .4s;
  width: 60%;
  margin-top: 7%;
  ${LanguageCardContainer}:hover & {
    transform: scale(1.1);
  }
`

export const LanguageTitle = styled.div`
  font-weight: 400;
  margin: 10px auto;
`
