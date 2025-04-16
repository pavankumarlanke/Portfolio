import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import project1 from '../images/chatbot.jpg'; // Replace with your images
import project2 from '../images/ecommerce.jpg';
import project3 from '../images/foodapp.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Chat Bot',
      description:
        'A software application used to conduct online chat conversations via text or text-to-speech.',
      image: project1,
      link: 'https://chatbotravi.ccbp.tech/',
    },
    {
      id: 2,
      title: 'E-Commerce',
      description:
        'An online store for buying and selling goods with secure payment processing.',
      image: project2,
      link: 'https://guruecommerce.ccbp.tech',
    },
    {
      id: 3,
      title: 'Happy Meals',
      description:
        'A food ordering platform with interactive UI/UX and simple call to actions.',
      image: project3,
      link: 'https://ecommercert.ccbp.tech/',
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <div className="project-content p-4">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Button
                    href={project.link}
                    variant="outline-primary"
                    size="sm"
                    target="_blank"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
