import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../images/profile.jpg';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src={profileImg}
                alt="Pavan Kumar"
                className="footer-logo rounded-circle mr-3"
                width="60"
                height="60"
              />
              <div>
                <h5 className="mb-0">Pavan Kumar Lanke</h5>
                <p className="mb-0">Full Stack Developer</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <div className="social-icons mb-3 mb-md-0">
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
            <p className="mb-0">&copy; {new Date().getFullYear()} Pavan Kumar Lanke. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
