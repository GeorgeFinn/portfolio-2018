import React, {Component} from 'react'
import CourseCard from './CourseCard'

const CoursesList = ({courses}) => {
  const coursesItems = courses.map((course, i) => <CourseCard index={i} key={course} course={course}/>)
  return <div>{coursesItems}</div>
}

export default CoursesList
