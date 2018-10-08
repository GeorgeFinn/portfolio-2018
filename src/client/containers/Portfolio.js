import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'

import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import TagList from "../components/TagList";
import ProjectList from '../components/ProjectList'
import {GridContainer, HeaderContainer, ContentContainer, FooterContainer} from '../styles/shared-grid-styles'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      tags: []
    };
  }

  populateState(data) {
    const uniqueTags = []; // String
    const tags = []; // Object
    data.map(project => {
      if (uniqueTags.indexOf(project.category) === -1) {
        uniqueTags.push(project.category);
        tags.push(project.category)
      }
    });
    tags.unshift('All')
    this.setState({ projects: data, tags: tags, tag: 'All' });
    console.log(this.state);
  }

  componentDidMount() {
    axios
      .get("/api/projects/all")
      .then(res => {
        console.log(res);
        this.populateState(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    const pageTitle = "portfolio";
    const headerText = "Welcome to my playground";
    const buttonTitle = "View Resume";
    const iconUrl = require("../public/images/arrow.svg");

    const { children } = this.props;
    const { tags, projects, tag } = this.state;

    return (
      <GridContainer>
        <HeaderContainer>
          <Header pageTitle={pageTitle} headerText={headerText} />
          <GradientButton title={buttonTitle} iconUrl={iconUrl} />
        </HeaderContainer>
        <ContentContainer>
          <TagList tags={tags} tag={tag}/>
          <ProjectList projects={projects} tags={tags} tag={tag} />
        </ContentContainer>
        <FooterContainer />
      </GridContainer>
    );
  }
}

export default Portfolio;
