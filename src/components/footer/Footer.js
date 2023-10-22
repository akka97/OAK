import React from 'react';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'; // You may need to create a CSS file for styling
import logooak from "../../images/logo oak.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <ul>
                            <li> <a href="/"> <img src={logooak} /></a></li>
                            <li> <a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li> <a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <Container>
                        <Row className="last-footer">
                            <Col xs={12} md={7} className='lower-container '>
                                <div className="second-footer">
                                    <ul>
                                        <li> <p>&copy; {new Date().getFullYear} Your Company Name All rights reserved.</p></li>
                                        <li> <a href="/">Terms</a></li>
                                        <li><a href="/about">Privacy</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} md={5} className='lower-container language-container'>
                                <Form className="d-flex">
                                    <DropdownButton className='btn-primary' id="dropdown-item-button" title={
                                        <span>Languages<i class="bi bi-globe-americas lng-icon"></i></span>
                                    }>
                                        <Dropdown.Item as="button">English</Dropdown.Item>
                                        <Dropdown.Item as="button">Albania</Dropdown.Item>
                                    </DropdownButton>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
