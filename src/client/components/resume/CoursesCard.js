import React, {Component} from 'react'

const CoursesCard = ({courses}) => {
  const coursesItems = courses.map(course => <div key={course}>{course}</div>)
  return <div>{coursesItems}</div>
}

export default CoursesCard
