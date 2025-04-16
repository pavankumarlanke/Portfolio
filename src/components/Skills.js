import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
  const skills = [
    { icon: faHtml5, name: 'HTML5', level: 95 },
    { icon: faCss3Alt, name: 'CSS3', level: 90 },
    { icon: faJsSquare, name: 'JavaScript', level: 85 },
    { icon: faReact, name: 'React JS', level: 80 },
    { icon: faBootstrap, name: 'Bootstrap', level: 92 },
    { icon: faPython, name: 'Python', level: 75 },
  ];

  return (
    <section id="skills" className="skills-section py-5 bg-light">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <div className="skill-card text-center p-4">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="skill-icon mb-3"
                  size="3x"
                />
                <h4>{skill.name}</h4>
                <div className="progress mt-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
