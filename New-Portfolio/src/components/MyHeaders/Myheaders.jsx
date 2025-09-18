// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import SmoothScroll from 'smooth-scroll';

function Myheaders() {
    // const [beating, setBeating] = useState(false);
    // const [menuOpen, setMenuOpen] = useState(false);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const handleIconClick = () => {
    //     setBeating(true);
    //     setMenuOpen(!menuOpen); // Toggle menu
    //     setTimeout(() => setBeating(false), 250); // 600ms for one beat
    // };

    // const handleScroll = (e, targetId) => {
    //     e.preventDefault();
    //     // setMenuOpen(false); // Close menu after click
    //     if (location.pathname !== '/') {
    //         // Just navigate to home page with hash, no scroll here
    //         navigate(`/${targetId}`);
    //     } else {
    //         // Already on home page, smooth scroll immediately
    //         const scroll = new SmoothScroll();
    //         const anchor = document.querySelector(`#${targetId}`);
    //         if (anchor) {
    //             scroll.animateScroll(anchor);
    //         }
    //     }
    // };
    return (
        <div id='Home' className="w-screen h-screen bg-gradient-to-b from-slate-800 to-stone-950 flex flex-col lg:flex-row scroll-fade">
            <div className="flex-1 flex flex-row items-center justify-center text-lg-start text-center text-white">
                <h className='lg:text-9xl text-5xl text-white font-eb-garamond font-black tracking-widest'>PORTFOLIO</h>
            </div>
            
        </div> 
    );
}

export default Myheaders;