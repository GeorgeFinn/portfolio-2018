import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: "header";
  padding-top: 100px;
  color: ${props => props.primaryText};
`;

export const ContentContainer = styled.div`
  grid-area: "main";
  color: ${props => props.primaryText};
`;

export const FooterContainer = styled.div`
  grid-area: "footer";
  height: 100px;
  color: ${props => props.primaryText};
`;

export const PortfolioContainer = styled.div`
  color: ${props => props.primaryText};
  width: 80vw;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const ResumeContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const AboutContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
`;

export const CourseworkContainer = styled.div`
  margin-bottom: 200px;
`;

export const SelfLearningContainer = styled.div`
  margin-bottom: 200px;
`;

export const LanguagesContainer = styled.div`
  margin-bottom: 200px;
`;

export const LanguagesGridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
`;
export const ProjectsContainer = styled.div`
  margin-bottom: 50px;
`;

export const ProjectsListContainer = styled.div`
  margin-top: 100px;
`;

export const SelfLearningGridContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
`;
