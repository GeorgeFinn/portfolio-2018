import React, {Component} from 'react'
import {CourseCardContainer, CourseCardLeft, CourseCardRight} from '../../styles/resume.styles'
import Fade from 'react-reveal/Fade'



const CourseCard = ({index, course}) => {
  return <Fade right>
    <CourseCardContainer>
      <CourseCardLeft>
        {index + 1 > 9 ? 'i' : index + 1}
      </CourseCardLeft>
      <CourseCardRight>
        {course}
      </CourseCardRight>
    </CourseCardContainer>
    </Fade>
}

export default CourseCard
