import React, { Component } from "react";
import {
  ProjectCard,
  ProjectImg,
  ProjectCardDetails,
  ProjectCategory,
  ProjectDate,
  ProjectName,
  ProjectListContainer
} from "../styles/ProjectList.styles";
import Fade from "react-reveal/Fade";
import moment from "moment";

const Project = props => (
  <ProjectCard href={props.url} target="_blank">
    <ProjectImg src={props.imageUrl} alt={props.name} />
    <ProjectCardDetails>
      <ProjectCategory>{props.category}</ProjectCategory>
      <ProjectDate>{moment(props.date).format("MMMM YYYY")}</ProjectDate>
      <ProjectName>{props.name}</ProjectName>
    </ProjectCardDetails>
  </ProjectCard>
);

const ProjectList = ({ projects, currTag }) => {
  const projectItems = projects
    .filter(({ category }) => category === currTag || currTag === "All")
    .reverse()
    .map(project => (
      <Project
        key={project.name}
        name={project.name}
        category={project.category}
        imageUrl={project.imageUrl}
        url={project.url}
        date={project.date}
      />
    ));
  return (
    <Fade cascade>
      <ProjectListContainer>{projectItems}</ProjectListContainer>{" "}
    </Fade>
  );
};

export default ProjectList;
