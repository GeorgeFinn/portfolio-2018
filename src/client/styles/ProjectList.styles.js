import styled from "styled-components";

export const ProjectListContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

export const ProjectCard = styled.a`
  color: ${props => props.primaryText};
  transition: all 0.4s;
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const ProjectCardDetails = styled.div`
  color: ${props => props.primaryText};
  margin: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "category date"
    "name name";
`;
export const ProjectCategory = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: 600;
  font-size: 0.8em;
  grid-area: category;
  margin-bottom: 5px;
`;
export const ProjectName = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: normal;
  font-size: 1.2em;
  grid-column: 1 / 2;
  margin-top: 10px;
  grid-area: name;
`;
export const ProjectDate = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: normal;
  font-size: 0.8em;
  opacity: 0.5;
  grid-area: date;
  justify-self: end;
`;
export const ProjectImg = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.4s;
  ${ProjectCard}:hover & {
    transform: scale(1.1) translateY(-10px);
  }
`;
