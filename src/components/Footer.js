import React from 'react';
import '../App.css';
import portfolioData from '../portfolioData.json';

function Footer() {
    const { personalInfo } = portfolioData;

    return (
        <section id="footer">
            <footer>
                <p style={{textAlign: "center", color: "white"}}>{personalInfo.name}</p>
            </footer>
        </section> 
    );
}

export default Footer;