import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImg from '../images/about.jpg';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <Row>
          <Col lg={6}>
            <img src={aboutImg} alt="About Pavan" className="img-fluid rounded" />
          </Col>
          <Col lg={6}>
            <h3 className="about-title">Who am I?</h3>
            <p className="about-text">
              I'm Pavan Kumar, a passionate Full Stack Developer with a Bachelor's degree in Computer Science. 
              I specialize in creating responsive and efficient web applications using React, Bootstrap, and modern CSS.
            </p>
            <div className="personal-info mt-4">
              <div className="row">
                <div className="col-sm-6">
                  <p><strong>Name:</strong> Pavan Kumar Lanke</p>
                  <p><strong>Email:</strong> pavankumarlanke1@gmail.com</p>
                </div>
                <div className="col-sm-6">
                  <p><strong>Phone:</strong> +91 9666949615</p>
                  <p><strong>Location:</strong> Nagayalanka, Andhra Pradesh</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline-primary" className="mr-3">Download CV</Button>
              <Button href="#contact" variant="primary">Hire Me</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
