import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import TagList from "../components/TagList";
import ProjectList from "../components/ProjectList";
import {
  PortfolioContainer,
  HeaderContainer,
  ContentContainer,
  FooterContainer
} from "../styles/shared-grid.styles";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      tags: [],
      currTag: []
    };
  }

  populateState(data) {
    const uniqueTags = []; // String
    const tags = []; // Object
    data.map(project => {
      if (uniqueTags.indexOf(project.category) === -1) {
        uniqueTags.push(project.category);
        tags.push(project.category);
      }
    });
    tags.unshift("All");
    this.setState({ projects: data, tags: tags, currTag: "All" });
  }

  componentDidMount() {
    axios
      .get("/api/projects/all")
      .then(res => {
        this.populateState(res.data);
      })
      .catch(err => console.log(err));
  }

  handleClick = e => {
    this.setState({ currTag: e.target.innerText });
  };

  render() {
    const pageTitle = "portfolio";
    const headerText = "Welcome to my playground";
    const buttonTitle = "View Resume";
    const iconUrl = require("../../images/arrow.svg");

    const { tags, projects, currTag } = this.state;

    return (
      <PortfolioContainer>
        <HeaderContainer>
          <Header pageTitle={pageTitle} headerText={headerText} />
          <GradientButton url="/resume" title={buttonTitle} iconUrl={iconUrl} />
        </HeaderContainer>
        <ContentContainer>
          <TagList
            tags={tags}
            handleClick={this.handleClick}
            currTag={currTag}
          />
          <ProjectList projects={projects} tags={tags} currTag={currTag} />
        </ContentContainer>
        <FooterContainer />
      </PortfolioContainer>
    );
  }
}

export default Portfolio;
