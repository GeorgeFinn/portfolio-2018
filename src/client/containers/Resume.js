import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { withTheme } from "styled-components";
import {
  ResumeContainer,
  AboutContainer,
  CourseworkContainer,
  SelfLearningContainer,
  LanguagesContainer,
  ProjectsContainer,
  HeaderContainer
} from "../styles/shared-grid.styles";
import {
  Heading1,
  Heading3,
  Heading4,
  RegularLarge,
  Heading2,
  Regular
} from "../styles/text.styles";

import Header from "../components/Header";
import CoursesList from "../components/resume/CoursesList";
import LanguagesList from "../components/resume/LanguagesList";
import ProjectsList from "../components/resume/ProjectsList";
import SelfLearningList from "../components/resume/SelfLearningList";
import BackToTopButton from "../components/resume/BackToTopButton";
import GradientEmailButton from "../components/GradientEmailButton";
import ScrollText from "../components/ScrollText";

class Resume extends Component {
  handleEmail = e => {
    window.location.href = `mailto:george.finn@me.com`;
  };

  render() {
    const courses = [
      "Web Development",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Design Patterns",
      "Computer Architecture I,II",
      "Design &  Analysis of Algorithms",
      "Theory of Computation",
      "Discrete & Combinational Algebra I, II",
      "Artificial Intelligence",
      "Augmented Reality Experiences",
      "Advanced Angular 4"
    ];
    const designTopics = ["FramerX", "AffinityDesigner", "Sketch", "Figma"];

    const microserviceTopics = [
      "Spring Cloud Config",
      "Client side load balancing w/ Ribbon",
      "Eureka Naming Server",
      "Zuul API Gateway for logging",
      "Zipkin Distributed Tracing",
      "Fault Tolerance with Hystrix"
    ];

    const frontEndTopics = [
      "React Redux",
      "React Context API",
      "React Hooks",
      "Unit Testing with Jest",
      "Styled-Components"
    ];

    const backEndTopics = [
      "Java Spring Boot REST APIs",
      "Node REST APIs",
      "JWT Security",
      "Passwordless Authentication"
    ];

    const deploymentTopics = [
      "Bundling with Webpack",
      "AWS Elastic Beanstalk",
      "AWS S3",
      "AWS CI/CD",
      "Docker"
    ];

    const AITopics = [
      "Linear Regression",
      "Logistic Regression",
      "Gradient Descent",
      "Backpropagation",
      "Batch Gradient Descent",
      "Momentum",
      "Adaptive Learning Rates"
    ];

    const languages = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Swift",
      "Python",
      "C++",
      "Java",
      "Angular4"
    ];

    const projects = [
      {
        name: "Financial Engines",
        position: "Intern",
        description:
          "Built retirement goals module of a new financial tool.  I utilized design patterns such as redux, data stores, and lazy loading to improve performance and maintain high quality user experience.  I worked on an AGILE development team using a full development lifecycle.",
        languages: ["HTML5", "CSS3", "TypeScript", "Angular4"]
      },
      {
        name: "Career Planning Tool",
        position: "Senior Project",
        description:
          "Designed full stack system utilizing MongoDB, Express, React, and Node.  Worked for a client with a team of 5.  Programmed project backend as well as frontend.  Project included features such as elastic searching and continuous integration",
        languages: ["HTML5", "CSS3", "JavaScript", "React"]
      },
      {
        name: "Rose Art",
        position: "Developer",
        description:
          "Developed a community driven art gallery web application to manage and share RHIT's art collection of over 7000 pieces.  Designed full stack system architecture.  Developed application through AngularFire2 with CRUD system to manage art.",
        languages: ["HTML5", "CSS3", "TypeScript", "Angular4"]
      }
    ];
    const composeButton = require("../../images/icon-email-2.svg");
    const pageTitle = "resume";
    const headerText = "Developer Resume";
    const buttonTitle = "Email Me";
    const texts = [
      "Rose-Hulman graduate",
      "Computer Science Major",
      "Rose Hulman CSSE Senior Capstone winner"
    ];
    const hobbies = [
      "cook",
      "paint",
      "build speakers",
      "grind on personal projects",
      "automate life",
      "design",
      "work out",
      "play guitar",
      "obsessively clean"
    ];

    return (
      <ResumeContainer>
        <HeaderContainer>
          <Header pageTitle={pageTitle} headerText={headerText} />
          <GradientEmailButton
            url="mailto:george.finn@me.com"
            title={buttonTitle}
            iconUrl={composeButton}
          />
        </HeaderContainer>
        <Fade left>
          <AboutContainer>
            <Heading3>
              I am a <ScrollText texts={texts} />
              <br />
              from Chicago, Illinois
            </Heading3>
            <RegularLarge>
              I am the youngest of three.
              <br />
              In my free time I like to <ScrollText texts={hobbies} />.<br />
              My most prized possession is my <br />
              <span style={{ fontWeight: "600" }}>@me.com</span> email domain.
            </RegularLarge>
          </AboutContainer>
        </Fade>
        <CourseworkContainer>
          <Heading3>Academic Coursework</Heading3>
          <CoursesList courses={courses} />
        </CourseworkContainer>
        <SelfLearningContainer>
          <Heading3>Self Learning</Heading3>
          <Regular>
            Topics I have learning for personal projects & hobbies.
          </Regular>
          <Heading4>Design Tools</Heading4>
          <SelfLearningList topics={designTopics} />
          <Heading4>Front-end</Heading4>
          <SelfLearningList topics={frontEndTopics} />
          <Heading4>Back-end</Heading4>
          <SelfLearningList topics={backEndTopics} />
          <Heading4>Deployment</Heading4>
          <SelfLearningList topics={deploymentTopics} />
          <Heading4>Microservices</Heading4>
          <SelfLearningList topics={microserviceTopics} />
          <Heading4>Artificial Intelligence</Heading4>
          <SelfLearningList topics={AITopics} />
        </SelfLearningContainer>
        <LanguagesContainer>
          <Heading3>Programming Languages</Heading3>
          <Regular>
            Here is a list of various languages <br />
            I have learned over the past couple
            <br />
            years.
          </Regular>
          <LanguagesList languages={languages} />
        </LanguagesContainer>
        <ProjectsContainer>
          <Heading2>Projects and Experience</Heading2>
          <ProjectsList projects={projects} />
        </ProjectsContainer>
        <Fade bottom>
          <BackToTopButton scrollStepInPx="100" delayInMs="16.66" />
        </Fade>
      </ResumeContainer>
    );
  }
}

export default Resume;
