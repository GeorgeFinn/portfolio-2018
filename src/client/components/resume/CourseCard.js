import React, {Component} from 'react'
import {CourseCardContainer, CourseCardLeft, CourseCardRight} from '../../styles/resume.styles'




const CourseCard = ({index, course}) => {
  return <CourseCardContainer>
      <CourseCardLeft>
        {index + 1 > 9 ? 'i' : index + 1}
      </CourseCardLeft>
      <CourseCardRight>
        {course}
      </CourseCardRight>
    </CourseCardContainer>
}

export default CourseCard
