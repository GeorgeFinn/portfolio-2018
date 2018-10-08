import styled from 'styled-components'

export const ProjectListContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap: 40px;
`

export const ProjectCard = styled.div`
  transition: all .4s;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`

export const ProjectCardDetails = styled.div`
  margin: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "category date"
    "name name";
`
export const ProjectCategory = styled.div`
  font-weight: 600;
  font-size: .8em;
  grid-area: category;
`
export const ProjectName = styled.div`
  font-weight: normal;
  font-size: 1.3em;
  grid-column: 1 / 2;
  grid-area: name;
`
export const ProjectDate = styled.div`
  font-weight: normal;
  font-size: .8em;
  color: rgba(142, 154, 167, 0.5);
  grid-area: date;
  justify-self: end;
`
export const ProjectImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
