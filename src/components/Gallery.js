import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import portfolioData from '../portfolioData.json';

// Import all project images
import Healthcare from '../images/Portfolio/App_ui.png';
import OnlineShop from '../images/Portfolio/onlineshop.jpg';
import Food from '../images/Portfolio/food.jpg';
import smartCity from '../images/Portfolio/smartCity.jpg';
import Portfolio from '../images/Portfolio/portfolio.PNG';
import PFE from '../images/Portfolio/pfe.PNG';
import Locar from '../images/Portfolio/locar.PNG';
import SmartCityPDF from '../files/SmartCity.pdf';

const projectImages = {
  "Healthcare": Healthcare,
  "OnlineShop": OnlineShop,
  "Food": Food,
  "smartCity": smartCity,
  "Portfolio": Portfolio,
  "PFE": PFE,
  "Locar": Locar
};

function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    const { projects: portfolioProjects, projectTags } = portfolioData;

    useEffect(() => {
        setProjects(portfolioProjects);
    }, []);

    useEffect(() => {
        const filtered = portfolioProjects.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <div id="filter">
                {projectTags.map(tag => (
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
                                src={projectImages[item.image]} 
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