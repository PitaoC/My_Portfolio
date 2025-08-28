import './myheader.css';
import MeHeader from '../../assets/MeHeader.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';



function MyHeader() {
    const [beating, setBeating] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleIconClick = () => {
        setBeating(true);
        setMenuOpen(!menuOpen); // Toggle menu
        setTimeout(() => setBeating(false), 250); // 600ms for one beat
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        // setMenuOpen(false); // Close menu after click
        if (location.pathname !== '/') {
            // Just navigate to home page with hash, no scroll here
            navigate(`/${targetId}`);
        } else {
            // Already on home page, smooth scroll immediately
            const scroll = new SmoothScroll();
            const anchor = document.querySelector(`#${targetId}`);
            if (anchor) {
                scroll.animateScroll(anchor);
            }
        }
    };

    return (
        <div id='Home' className="myportfolio">
            {/* <img alt="MeHeader" src={MeHeader} ></img> */}
            <h1>PORTFOLIO</h1>
            {/* <div className='NavIcon NavBar'> */}
            <div className={menuOpen ? 'NavBar' : 'NavIcon'}>
                <FontAwesomeIcon
                    icon={faBars}
                    beat={beating}
                    style={{ color: "#ffffff", cursor: "pointer", fontSize: "2rem" }}
                    onClick={handleIconClick}
                />
                <nav className='Bar1' onClick={(e) => handleScroll(e, 'Home')}>Home</nav>
                <nav className='Bar4' onClick={(e) => handleScroll(e, 'About')}>About Me</nav>
                <nav className='Bar2' onClick={(e) => handleScroll(e, 'Team')}>Team</nav>
                {/* <nav className='Bar3'>Projects</nav> */}
                <nav className='Bar5' onClick={(e) => handleScroll(e, 'Contact')}>Contact</nav>
            </div>
        </div> 
    );
}

export default MyHeader;
