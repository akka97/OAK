import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logooak from "../../images/logo oak.png";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Footer.css';

function Footer() {
    const handleChange = (e) => {

    }
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
                            <FormControl fullWidth className='language'>
                                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={20}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={20}>English</MenuItem>
                                    <MenuItem value={30}>Shqip</MenuItem>
                                </Select>
                            </FormControl>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
