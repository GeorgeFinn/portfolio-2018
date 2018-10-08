import React, {Component} from 'react'

const EducationCard = ({education}) => (
  <div>
    {education.major}, {education.minor}, {education.school}, {education.time}
  </div>
);

export default EducationCard
