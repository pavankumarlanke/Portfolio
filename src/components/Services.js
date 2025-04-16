import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faLaptopCode, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  const services = [
    {
      icon: faLaptopCode,
      title: 'Static Websites',
      description: 'Professional static websites with fixed content developed using HTML and CSS that display the same information to every visitor.'
    },
    {
      icon: faMobileAlt,
      title: 'Responsive Design',
      description: 'Websites that respond to the user\'s behavior and environment based on screen size, platform and orientation.'
    },
    {
      icon: faPaintBrush,
      title: 'Custom Layouts',
      description: 'Customizable templates with set layouts where you can change photos and colors to match your brand identity.'
    }
  ];

  return (
    <section id="services" className="services-section py-5 bg-light">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">
                  <FontAwesomeIcon icon={service.icon} size="3x" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
