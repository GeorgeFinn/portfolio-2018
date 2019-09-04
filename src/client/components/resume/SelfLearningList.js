import React, { Component } from "react";
import { SelfLearningGridContainer } from "../../styles/shared-grid.styles";
import SelfLearningCard from "./SelfLearningCard";

const SelfLearningList = ({ topics }) => {
  const topicItems = topics.map((topic, i) => (
    <SelfLearningCard index={i} key={topic} topic={topic} />
  ));
  return <SelfLearningGridContainer>{topicItems}</SelfLearningGridContainer>;
};

export default SelfLearningList;
