import styled from 'styled-components'

export const CourseCardContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  border-radius: 14px;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
`

export const CourseCardLeft = styled.span`
  width: 50px;
  height: 100%;
  padding: 20px 15px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  padding-right: 20px;
  text-align: center;
  color: #3BDFD2;
  font-weight: 700;
  font-size: 1.5em;
`

export const CourseCardRight = styled.span`
  padding: 20px 15px;
  vertical-align: middle;
  text-align: center;
  font-weight: normal;
`

export const LanguageCardContainer = styled.div`
  text-align: center;
  width: 100%;
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
