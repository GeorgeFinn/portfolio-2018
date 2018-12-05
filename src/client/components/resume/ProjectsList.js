import React, {Component} from 'react'
import { ProjectsListContainer } from '../../styles/shared-grid.styles'
import ProjectCard from './ProjectCard'

const ProjectsList = ({projects}) => {
  const projectItems = projects.map((project, i) => <ProjectCard index={i} key={project.name} project={project}/>)
  return <ProjectsListContainer>{projectItems}</ProjectsListContainer>
}

export default ProjectsList
