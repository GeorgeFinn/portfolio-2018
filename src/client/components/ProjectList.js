import React, { Component } from 'react'
import {ProjectCard, ProjectImg, ProjectCardDetails, ProjectCategory, ProjectDate, ProjectName, ProjectListContainer } from '../styles/project-grid.styles'
import Fade from 'react-reveal/Fade'

const Project = props => (
    <ProjectCard>
      <ProjectImg src={props.imageUrl} alt={props.name} />
      <ProjectCardDetails>
        <ProjectCategory>{props.category}</ProjectCategory>
        <ProjectDate>October 2018</ProjectDate>
        <ProjectName>{props.name}</ProjectName>
      </ProjectCardDetails>
    </ProjectCard>

);

const ProjectList = ({ projects, currTag }) => {
  const projectItems = projects
    .filter(({category}) => category === currTag || currTag === 'All')
    .map(project => <Project key={project.name} name={project.name} category={project.category} imageUrl={project.imageUrl} />)
  return     <Fade cascade><ProjectListContainer>{projectItems}</ProjectListContainer>    </Fade>
}

export default ProjectList
