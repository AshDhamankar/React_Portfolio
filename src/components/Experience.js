import React from 'react';
import '../App.css';
import portfolioData from '../portfolioData.json';

function Experience() {
    const { experience = [] } = portfolioData;

    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                {experience.length > 0 ? (
                    <ul className="timeline">
                        {experience.map((job, index) => (
                            <li key={index}>
                                <a target="_blank" href={job.link} rel="noopener noreferrer">{job.company}</a>
                                <a href="#" className="float-right">{job.period}</a>
                                <p>{job.title}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No experience data available.</p>
                )}
            </div>
        </section>
    );
}

export default Experience;