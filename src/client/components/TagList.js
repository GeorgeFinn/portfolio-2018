import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

const TagsContainer = styled.div`
  margin-bottom: 80px;
  color: ${props => props.theme.primaryText};
`;
const TagTitle = styled.div`
  font-size: 0.8em;
  font-weight: 200;
  display: inline-block;
`;
const TagName = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;
const ToggledButton = styled.div`
  display: inline-block;
  font-size: 0.8em;
  font-weight: 200;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 30px;
  transition: all 0.4s ease;
  border: 1px solid ${props => props.theme.secondary};
  &:hover {
    border: 1px solid ${props => props.theme.secondary};
    cursor: pointer;
  }
`;
const UnToggledButton = styled(ToggledButton)`
  border: 1px solid #ddd;
  transition: all 0.4s ease;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const Tag = props => {
  const TagButton =
    props.tag === props.currTag ? ToggledButton : UnToggledButton;
  return (
    <TagButton onClick={props.handleClick}>
      <TagName>{props.tag}</TagName>
    </TagButton>
  );
};

const TagList = ({ tags, currTag, handleClick }) => {
  const tagItems = tags.map(
    t => <Tag handleClick={handleClick} key={t} tag={t} currTag={currTag} />,
    this
  );
  return (
    <Fade>
      <TagsContainer>
        <TagTitle>Filter:</TagTitle>
        {tagItems}
      </TagsContainer>
    </Fade>
  );
};

export default TagList;
