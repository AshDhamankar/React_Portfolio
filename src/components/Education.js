import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <a href="https://www.njit.edu/" className="float-right">2019 - 2011</a>
                        <p>
                            Master in Business Administration (MBA) in Information Systems and Finance.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;