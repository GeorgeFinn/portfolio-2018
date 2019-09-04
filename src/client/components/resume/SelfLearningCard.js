import React, { Component } from "react";
import {
  SelfLearningCardContainer,
  SelfLearningTitle
} from "../../styles/resume.styles";
import Fade from "react-reveal/Fade";

const SelfLearningCard = ({ topic }) => {
  return (
    <Fade bottom>
      <SelfLearningCardContainer>
        <SelfLearningTitle>{topic}</SelfLearningTitle>
      </SelfLearningCardContainer>
    </Fade>
  );
};

export default SelfLearningCard;
