import React, { Component } from 'react'
import styled from 'styled-components'

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
  margin-right: 20px;
`

const TagButton = styled.div`
  display: inline-block;
  background: #F3F5F6;
  font-size: .8em;
  font-weight: 200;
  border-radius: 20px;
  padding: 15px 25px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`

const TagImage = styled.img`
  vertical-align: middle;
  height: 15px;
  width: 15px;
`


const Tag = props => (
  <TagButton>
    <TagName>{props.tag}</TagName>
    <TagImage src={require("../public/images/x-button.svg")} />
  </TagButton>
)

const TagList = ({ tags }) => {
  const tagItems = tags.map(tag => <Tag key={tag.toString()} tag={tag.toString()}/>)
  return <TagsContainer>
    <TagTitle>
      Tags:
    </TagTitle>
    {tagItems}</TagsContainer>
}

export default TagList
