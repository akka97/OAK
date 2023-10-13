import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Your Logo" />
                        <h1>Your Project Name</h1>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
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