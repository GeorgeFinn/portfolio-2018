import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const TagsContainer = styled.div`
  margin-bottom: 80px;
`
const TagTitle = styled.div`
  font-size: .8em;
  font-weight: 200;
  display: inline-block;
`
const TagName = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`
const ToggledButton = styled.div`
  display: inline-block;
  background: #f3f3f3;
  font-size: .8em;
  font-weight: 200;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 30px;
  transition: all .4s ease;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: #f3f3f3;
  }
`
const UnToggledButton = styled(ToggledButton)`
  background: #fff;
  border: 1px solid #ddd;
`

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
  const tagItems = tags.map(t => <Tag handleClick={handleClick} key={t} tag={t} currTag={currTag}/>, this)
  return <TagsContainer>
    <TagTitle>
      Filter:
    </TagTitle>
    {tagItems}</TagsContainer>
}

export default TagList
