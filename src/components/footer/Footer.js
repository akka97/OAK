import React from 'react';
import './Footer.css'; // You may need to create a CSS file for styling
import logooak from "../../images/logo oak.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logooak} />
                    </div>
                    <div className="footer-links">
                        <ul>
                            
                                <li> <a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li> <a href="/services">Services</a></li>
                                <li><a href="/contact">Contact</a></li>

                        </ul>
                    </div>

                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear} Your Company Name</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
