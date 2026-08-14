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
                                    <a href="https://github.com/ashDhamankar" target="_"><i className="fa fa-github"></i></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/ashwini-dhamankar/" target="_"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                        Hello 👋🏼, I am Ashwini, Full-Stack Web Developer, based in USA, 
                        I am passionate about Web Development, DevOps and Cloud. 
                        I focus on modern, responsive website solutions that are easy to use by the end user. 
                        If you have an opportunity, feel free to contact me.
                             
                    </p>
                        <a href="https://drive.google.com/file/d/10W6kZZT-uEGUc2KP-TLj_wCE43X0WyP2/view?usp=drive_link" target="_blank" id="download" className="btn  hero-btn">Download CV</a>
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
