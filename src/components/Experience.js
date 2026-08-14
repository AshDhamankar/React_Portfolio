import React from 'react';
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                <ul className="timeline">
                    <li>
                        <a href="https://www.jpmorgan.com/" target="_blank" rel="noreferrer">JP MORGAN CHASE</a>
                        <a href="https://www.jpmorgan.com/" className="float-right">Sep 2022 - Present</a>
                        <p>
                            Senior Software Engineer, Full Stack Developer
                        </p>
                    </li>
                    <li>
                        <a href="https://www.waters.com/">CONSULTANT - Front End Developer</a>
                        <a href="https://www.waters.com/" className="float-right">Feb 2021- Sep 2022</a>
                        <p>
                            Waters Corporation – Boston, MA
                        </p>
                        <p>
                            Bank of America – Charlotte, NC
                        </p>
                        <p>
                            Wells Fargo – Summit, NJ
                        </p>
                    </li>
                    <li>
                        <a href="https://www.cognizant.com/us/en">COGNIZANT TECHNOLOGY SERVICES</a>
                        <a href="https://www.cognizant.com/us/en" className="float-right">Sept 2018 - Feb 2021</a>
                        <p>
                            
                        </p>
                    </li>
                    <li>
                        <a href="https://www.infosys.com/">INFOSYS</a>
                        <a href="https://www.infosys.com/" className="float-right">Sep 2016 - Aug 2018</a>
                        <p>
                            Tech Associate Developer	
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;