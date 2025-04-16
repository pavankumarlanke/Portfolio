import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImg from '../images/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="order-2 order-md-1">
            <h1 className="hero-title">
              Hey, I'm <span className="highlight">Pavan Kumar Lanke</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <Button href="#contact" variant="primary" className="mt-3">
              Get In Touch
            </Button>
          </Col>
          <Col md={5} className="order-1 order-md-2 text-center">
            <img
              src={profileImg}
              alt="Pavan Kumar"
              className="profile-img img-fluid rounded-circle"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
