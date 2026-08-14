import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import Typed from "react-typed";

function Hero() {
    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1>Ashwini Dhamankar</h1>
                            <Typed className={"descriptionTyped"} strings={["Full Stack Web Developer", "Front End Developer", "Software Developer"]} typeSpeed={40} backSpeed={50}
                                loop />
                            <div className="social-icons">
                                <span>
                                    <a href="https://github.com/ashDhamankar" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/ashwini-dhamankar/" target="_blank" rel="noreferrer"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                        Hi 👋🏼, I'm Ashwini — a Senior Full-Stack Developer based in the U.S., with 10+ years building scalable, 
                        high-performance web applications for the financial services industry. 
                        <br/>I specialize in React, TypeScript, and Java/Spring Boot on the backend, with growing focus on cloud-native architecture.I care about building software that's not just functional, but genuinely easy and intuitive for the people using it.
                        <br/>Open to new opportunities feel free to reach out.
                             
                    </p>
                        <a href="https://drive.google.com/file/d/10W6kZZT-uEGUc2KP-TLj_wCE43X0WyP2/view?usp=drive_link" target="_blank" rel="noreferrer" id="download" className="btn  hero-btn">Download CV</a>
                        <Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div onclick="smoothScroll()" type="button" id="scroll-down" className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;
