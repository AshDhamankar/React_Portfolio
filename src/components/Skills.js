import React from 'react';
import portfolioData from '../portfolioData.json';

function Skills() {
    const { skills } = portfolioData;

    // Split skills into two arrays
    const midpoint = Math.ceil(skills.length / 2);
    const technologiesOne = skills.slice(0, midpoint).map(skill => skill.name);
    const technologiesTwo = skills.slice(midpoint).map(skill => skill.name);

    return (
        <section id="skills" className="container">
            <div className="container">
                <h2>Skills</h2>
                <div className="technologies">
                    <ul className="technologies-row">
                        {technologiesOne.map((techno, i) =>
                            <li key={i}>{techno}</li>
                        )}
                    </ul>
                    <ul className="technologies-row">
                        {technologiesTwo.map((techno, i) =>
                            <li key={i}>{techno}</li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;