import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import Healthcare from '../images/Portfolio/App_ui.png'
import OnlineShop from '../images/Portfolio/onlineshop.jpg'
import Food from '../images/Portfolio/food.jpg'
import smartCity from '../images/Portfolio/smartCity.jpg'
import Portfolio from '../images/Portfolio/portfolio.PNG'
import PFE from '../images/Portfolio/pfe.PNG'
import Locar from '../images/Portfolio/locar.PNG'
import SmartCityPDF from '../files/SmartCity.pdf'

function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    const tags = ['all', 'Javascript', "ReactJS", "UI/UX", "Java", "NodeJS", "Firebase", "MongoDB", "Spring boot"];

    const portfolio = [
        {
            title: "MIOLA PFE",
            stack: "Full Stack Spring/ReactJS",
            image: PFE,
            category: ['all', 'Java EE', 'Spring boot', 'Spring Security', 'ReactJS', 'PostgreSQL', 'Git'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://miolapfe.herokuapp.com ',
        },
        {
            title: "React Portfolio",
            stack: "ReactJS",
            image: Portfolio,
            category: ['all', 'ReactJS'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://github.com/ilyasstrh/React_Portfolio',
        },
        {
            title: 'Food delivery system',
            stack: "JAVA Desktop",
            image: Food,
            category: ['all', 'Java', 'JavaFX', 'Maven', 'Git'],
            description: "The main purpose of our application is to allow users to minimize travel time to restaurants and enjoy their home food in a short time by viewing the progress of their order, thus facilitating the task of order management for restaurants, thus offering an optimal path for deliveries, with several IoT-based functionalities.",
            link: 'https://github.com/ilyasstrh/FOOD_SYSTEM',
        },
        {
            title: 'Healthcare Mobile App',
            stack: "Android",
            image: Healthcare,
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
            description: "A mobile application that facilitates making appointments and monitoring patients",
            link: 'https://github.com/ilyasstrh/Health_Care_App',
        },
        {
            title: 'Online Store',
            stack: "MongoDB/Express/ReactJS/NodeJS",
            image: OnlineShop,
            category: ['all', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mongoose', 'UI/UX'],
            description: "An online car rental and management platform",
            link: 'https://github.com/ilyasstrh/OnlineStore',
        },
        {
            title: 'Car rental management',
            stack: "PHP/MySQL",
            image: Locar,
            category: ['all', 'PHP', 'Javascript', 'HTML', 'CSS', 'MySQL'],
            description: "An online car rental and management platform",
        },
        {
            title: 'IoT Smart City Prototype',
            stack: "Arduino/ESP8266",
            image: smartCity,
            category: ['all','Javascript', 'HTML', 'CSS'],
            description: "IoT Smart City Prototype",
            link: SmartCityPDF,
        },
    ];

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <div id="filter">
                {tags.map(tag => (
                    <button key={tag} className="btn btn-project">
                        <a 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setFilter(tag);
                            }}
                            style={{ fontWeight: filter === tag ? 'bold' : 'normal' }}
                        >
                            {tag}
                        </a>
                    </button>
                ))}
            </div>
            <div className="image-grid">
                {projects.filter(item => item.filtered).map(item => (
                    <div className="box" key={item.title} >
                        <div className="grid-image">
                            <img 
                                src={item.image} 
                                alt={item.title}
                                onMouseEnter={() => setHover(true)} 
                                onMouseLeave={() => setHover(false)} 
                            />
                        </div>
                        <div className={hover ? 'hidden' : 'display-content'}>
                            <h2>{item.title}</h2>
                            <p>{item.stack}</p>
                            {item.link && (
                                <button className="btn hero-btn title">
                                    <a id="title" href={item.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;