import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import Typed from "react-typed";
import portfolioData from '../portfolioData.json';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFResume from './PDFResume';

function Hero() {
    const { personalInfo } = portfolioData;
    const [showResume, setShowResume] = useState(false);

    const handleGenerateCV = () => {
        setShowResume(true);
    };

    const CVButton = () => {
        if (personalInfo.cvLink) {
            return (
                <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer" id="download" className="btn hero-btn">
                    Download CV
                </a>
            );
        } else if (showResume) {
            return (
                <PDFDownloadLink 
                    document={<PDFResume />} 
                    fileName="resume.pdf"
                    className="btn hero-btn"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? 'Generating PDF...' : 'Download PDF'
                    }
                </PDFDownloadLink>
            );
        } else {
            return (
                <button onClick={handleGenerateCV} className="btn hero-btn">
                    Generate CV
                </button>
            );
        }
    };

    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1>{personalInfo.name}</h1>
                            <Typed className={"descriptionTyped"} strings={personalInfo.titles} typeSpeed={40} backSpeed={50} loop />
                            <div className="social-icons">
                                {Object.entries(personalInfo.socialLinks).map(([platform, link]) => (
                                    <span key={platform}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <i className={`fa fa-${platform}`}></i>
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">{personalInfo.description}</p>
                        <CVButton />
                        <Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;