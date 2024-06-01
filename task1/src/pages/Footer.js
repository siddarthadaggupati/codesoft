import React from 'react';
import './Footer.css';
import Codechef from '../codechef.svg';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Siddartha. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/siddarthadaggupati" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/siddartha-daggupati-8b7a0b28a" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.codechef.com/users/klu2200030213" target="_blank" rel="noopener noreferrer">
                    <img src={Codechef} alt='Codechef Logo'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
