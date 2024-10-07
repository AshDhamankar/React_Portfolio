import React from 'react';
import '../App.css';
import portfolioData from '../portfolioData.json';

function Education() {
    const { education } = portfolioData;

    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    {education.map((edu, index) => (
                        <li key={index}>
                            <a target="_blank" href={edu.link} rel="noopener noreferrer">{edu.institution}</a>
                            <a href="#" className="float-right">{edu.period}</a>
                            <p>{edu.degree}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Education;