import styled from "styled-components";

export const CourseCardContainer = styled.div`
  color: ${props => props.theme.primaryText};
  display: grid;
  grid-template-columns: 80px 1fr;
  border-radius: 14px;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: ${props => props.theme.shadow};
  align-items: center;
  margin-bottom: 15px;
  transition: all 0.4s;
  &:hover {
    transform: translateX(-10px);
  }
`;

export const CourseCardLeft = styled.div`
  text-align: center;
  color: ${props => props.theme.secondary};
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CourseCardRight = styled.div`
  font-weight: normal;
`;

export const LanguageCardContainer = styled.div`
  color: ${props => props.theme.primaryText};
  text-align: center;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.4s;
  &:hover {
    box-shadow: ${props => props.theme.shadowHover};
    transform: translateY(-10px);
  }
`;

export const LanguageImage = styled.img`
  transition: all 0.4s;
  width: 50%;
  margin-top: 7%;
  ${LanguageCardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const LanguageTitle = styled.div`
  font-weight: 400;
  margin: 10px auto;
`;

export const ProjectCardContainer = styled.div`
  margin-bottom: 100px;
`;
export const ProjectLanguageContainer = styled.div`
  color: ${props => props.theme.primaryText};
  display: grid;
  margin-top: 15px;
  grid-template-columns: repeat(5, 1fr);
`;
export const ProjectLanguageImage = styled.img`
  transition: all 0.4s;
  width: 50%;
  margin-top: 10%;
`;

export const BackToTopButtonContainer = styled.button`
  color: ${props => props.theme.primaryText};
  background-color: transparent;
  padding: 10px 30px;
  font-size: 1em;
  font-weight: 500;
  border: 2px solid ${props => props.theme.primaryText};
  border-radius: 25px;
  outline: none;
  transition: all 0.4s ease;
  margin-bottom: 100px;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.secondary};
    transform: translateY(-5px);
    border: 2px solid ${props => props.theme.secondary};
  }
`;

export const SelfLearningCardContainer = styled.div`
  color: ${props => props.theme.primaryText};
  text-align: center;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgb(198, 208, 235);
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.4s;
  &:hover {
    box-shadow: ${props => props.theme.shadowHover};
    transform: translateY(-10px);
  }
`;

export const SelfLearningTitle = styled.div`
  font-weight: 400;
  margin: 10px auto;
`;
