import React, { Component } from "react";
import {ResumeContainer, AboutContainer, CourseworkContainer, LanguagesContainer} from '../styles/shared-grid.styles'
import { Heading1, Heading3, RegularLarge, SecondaryHeading1 } from '../styles/text.styles'
import Header from '../components/Header'
import CoursesList from '../components/resume/CoursesList'
import LanguagesList from '../components/resume/LanguagesList'

class Resume extends Component {
  render() {
    const courses =['Web Development',
      'Object-Oriented Programming',
      'Database Systems',
      'Software Design Patterns',
      'Computer Architecture I,II',
      'Design &  Analysis of Algorithms',
      'Theory of Computation',
      'Discrete & Combinational Algebra I, II',
      'Artificial Intelligence',
      'Augmented Reality Experiences',
      'Advanced Angular 4']

      const languages = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'TypeScript',
        'Swift',
        'Python',
        'C++',
        'Java',
        'Angular4'
      ]

    return (
      <ResumeContainer>
        <Heading1>George<br/>Finn</Heading1>
        <SecondaryHeading1>Resume</SecondaryHeading1>
        <AboutContainer>
          <Heading3>I am a Computer Science major<br/>from Chicago, Illinois</Heading3>
          <RegularLarge>I am the youngest of three.<br/>
            In my free time I like to design.<br/>
            My most prized possession is my <br/>
            @me.com email domain.</RegularLarge>
        </AboutContainer>
        <CourseworkContainer>
          <Heading3>Academic Coursework</Heading3>
          <CoursesList courses={courses} />
        </CourseworkContainer>
        <LanguagesContainer>
          <Heading3>Programming Languages</Heading3>
          <div>Here is a list of various languages <br/>
          I have learned over the past couple<br/>
          years.</div>
        <LanguagesList languages={languages} />
        </LanguagesContainer>
      </ResumeContainer>
    );
  }
}

export default Resume;
