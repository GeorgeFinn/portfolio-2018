import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import Header from '../components/Header'
import ContactCard from '../components/resume/ContactCard'
import CoursesCard from '../components/resume/CoursesCard'
import EducationCard from '../components/resume/EducationCard'
import SkillsCard from '../components/resume/SkillsCard'

class Resume extends Component {
  render() {
    const pageTitle = "Resume";
    const headerText = "Developer Resume";
    const contact = {
      name: 'George Finn',
      number: '(224) 392 6225',
      email: 'george.finn@me.com'
    }
    const education = {
      major: 'B.S. Computer Science',
      minor: 'Math',
      school: 'Rose-Hulman Institute of Technology',
      time: 'July 2014 - May 2019'
    }
    const courses =['Web Development',
      'Object-Oriented Programming',
      'Database Systems',
      'Software Design Patterns',
      'Computer Architecture I,II',
      'Augmented Reality Experiences',
      'Design &  Analysis of Algorithms',
      'Theory of Computation',
      'Discrete & Combinational Algebra I, II']

    const languages = [
      { name: 'HTML, CSS', comfort: 90 },
      { name: 'JavaScript', comfort: 90 },
      { name: 'TypeScript', comfort: 80 },
      { name: 'C++', comfort: 70 },
    ]
    const technologies = [
      { name: 'MERN Stack', comfort: 80 },
      { name: 'React React-Native', comfort: 90 },
      { name: 'Angular4', comfort: 70 },
      { name: 'Webpack, Babel', comfort: 85 },
    ]

    return (
      <div>
        <Header pageTitle={pageTitle} headerText={headerText} />
        <ContactCard contact={contact} />
        <EducationCard education={education}/>
        <CoursesCard courses={courses} />
        <SkillsCard skills={languages} />
        <SkillsCard skills={technologies} />
      </div>
    );
  }
}

export default Resume;
