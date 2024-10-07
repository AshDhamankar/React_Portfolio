import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
import portfolioData from '../portfolioData.json';

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const { menuItems } = portfolioData;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    {menuItems.map((item, index) => (
                        <Link 
                            key={index}
                            to={item.to} 
                            spy={true} 
                            smooth={true} 
                            onClick={toggleNav} 
                            className="menu-link"
                            activeClass={item.to === "hero" ? "active" : ""}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}