import React, { Component } from "react";
import {ResumeContainer, AboutContainer, CourseworkContainer, LanguagesContainer, ProjectsContainer} from '../styles/shared-grid.styles'
import { Heading1, Heading3, RegularLarge, SecondaryHeading1, Heading2, SecondaryHeading2 } from '../styles/text.styles'
import Header from '../components/Header'
import CoursesList from '../components/resume/CoursesList'
import LanguagesList from '../components/resume/LanguagesList'
import ProjectsList from '../components/resume/ProjectsList'
import BackToTopButton from '../components/resume/BackToTopButton'
import GradientEmailButton from '../components/GradientEmailButton'
import ScrollText from '../components/ScrollText'
import {HeaderContainer} from '../styles/shared-grid.styles'


class Resume extends Component {
  handleEmail = e => {
    window.location.href = `mailto:george.finn@me.com`
  }

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

      const projects = [{
        name: 'Financial Engines',
        position: 'Intern',
        description: 'Built retirement goals module of a new financial tool.  I utilized design patterns such as redux, data stores, and lazy loading to improve performance and maintain high quality user experience.  I worked on an AGILE development team using a full development lifecycle.',
        languages: ['HTML5', 'CSS3', 'TypeScript', 'Angular4']
      },
    {
      name: 'Career Planning Tool',
      position: 'Senior Project',
      description: 'Designed full stack system utilizing MongoDB, Express, React, and Node.  Worked for a client with a team of 5.  Programmed project backend as well as frontend.  Project included features such as elastic searching and continuous integration',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
  {
    name: 'Rose Art',
    position: 'Developer',
    description: 'Developed a community driven art gallery web application to manage and share RHIT\'s art collection of over 7000 pieces.  Designed full stack system architecture.  Developed application through AngularFire2 with CRUD system to manage art.',
    languages: ['HTML5', 'CSS3', 'TypeScript', 'Angular4']
  }]

    const composeButton = require("../public/images/icon-email-2.svg");
    const pageTitle = "resume";
    const headerText = "Developer Resume";
    const buttonTitle = "Email Me";
    const texts = ['Rose-Hulman Senior', 'Computer Science Major', 'Math Minor']
    const hobbies = ['cook', 'paint', 'build speakers', 'design', 'work out']
    return (
      <ResumeContainer>
      <HeaderContainer>
        <Header pageTitle={pageTitle} headerText={headerText} />
          <GradientEmailButton url='mailto:george.finn@me.com' title={buttonTitle} iconUrl={composeButton} />
      </HeaderContainer>
        <AboutContainer>
          <Heading3>I am a <ScrollText texts={texts}/><br/>from Chicago, Illinois</Heading3>
          <RegularLarge>I am the youngest of three.<br/>
            In my free time I like to <ScrollText texts={hobbies}/>.<br/>
            My most prized possession is my <br/>
            <span style={{ color: "#22AA99", fontWeight: "600"}}>@me.com</span> email domain.</RegularLarge>
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
        <ProjectsContainer>
          <Heading2>Projects and Experience</Heading2>
          <ProjectsList projects={projects} />
        </ProjectsContainer>
        <BackToTopButton scrollStepInPx="100" delayInMs="16.66"/>
      </ResumeContainer>
    );
  }
}

export default Resume;
