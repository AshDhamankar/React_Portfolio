import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Gallery.scss';
import Food from '../images/Portfolio/food.jpg'
import Portfolio from '../images/Portfolio/portfolio.PNG'

function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    /**
     * Add portfolio project here
     */
    const portfolio = useMemo(() => [
        {
            title: "React Portfolio",
            stack: "ReactJS",
            image: Portfolio,
            category: ['all', 'ReactJS', 'web-vitals', 'react-scroll', 'react-toastify', 'react-transition-group', 'react-tsparticles', 'sass'],
            description: "This is my personal portfolio website built using ReactJS. It showcases my skills, projects, and experience as a Full Stack Web Developer. The website is designed to be responsive and user-friendly, providing visitors with an overview of my work and allowing them to get in touch with me.",
            link: 'https://github.com/ashDhamankar/ash-dhamankar-portfolio',
        },
        {
            title: 'Recipe Book',
            stack: "Desktop",
            image: Food,
            category: ['all', 'Java', 'ReactJs', 'Maven'],
            description: "The main purpose of our application is to allow users to maintain the recipe book and to share their recipes with other users. Users can also search for recipes based on ingredients, cuisine, and dietary restrictions.",
            link: 'https://github.com/AshDhamankar/tasty-shelf',
        },
        {
            title: 'Finance App',
            stack: "Desktop",
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
            description: "A mobile application that facilitates monitoring clients' financial transactions and provides a comprehensive overview of their financial status. The app allows users to track their income, expenses, and savings, as well as set financial goals and receive personalized recommendations for improving their financial health.",
        },
    ], []);

    useEffect(() => {
        setProjects(portfolio);
    }, [portfolio]);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter, portfolio]);

    return (
        <div>
            <div id="filter">
                {/* Tags to filter projects */}
                <button type="button" className="btn btn-project" onClick={() => setFilter('all')}>All</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('Javascript')}>Javascript</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('ReactJS')}>ReactJS</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('Angular')}>Angular</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('UI/UX')}>UI/UX</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('Java')}>Java</button>
                <button type="button" className="btn btn-project" onClick={() => setFilter('NodeJS')}>NodeJS</button>
            </div>
            <div className="image-grid">
                {projects.map(item => item.filtered === true ? (
                    <div className="box" key={item.title} >
                        <div className="grid-image">
                            <img src={item.image} alt={item.title} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                        </div>
                        <div className={hover ? 'hidden' : 'display-content'}>
                            <h2>{item.title}</h2>
                            <p>{item.stack}</p>
                            <a id="title" href={item.link} target="_blank" rel="noreferrer" className="btn hero-btn title">Learn more</a>
                        </div>
                    </div>
                ) : '')}
            </div>
        </div>
    );
}

export default Gallery;