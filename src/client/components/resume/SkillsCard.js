import React, {Component} from 'react'

const SkillsCard = ({skills}) => {
  const skillsItems = skills.map(skill => <div key={skill.name}>{skill.name}, {skill.comfort}</div>)
  return <div>{skillsItems}</div>
}

export default SkillsCard
