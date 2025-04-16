import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="contact-info">
              <div className="contact-item d-flex mb-4">
                <div className="icon mr-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h5>Location</h5>
                  <p>Nagayalanka, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-4">
                <div className="icon mr-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>pavankumarlanke1@gmail.com</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-4">
                <div className="icon mr-3">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 9666949615</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
