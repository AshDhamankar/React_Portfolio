import React from 'react';
import '../App.css';
import Gallery from './Gallery.js';
import portfolioData from '../portfolioData.json';

function Projects() {
    const { projectsSection } = portfolioData;

    return (
        <section id="projects" className="container">
            <div className="container">
                <h2>{projectsSection.title}</h2>
                <Gallery />
            </div>
        </section>
    );
}

export default Projects;