import React from 'react';
import './Nav.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"; 


const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  

   
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        };

    }, [])
    
    const toggleNav = () => {

        setToggleMenu(!toggleMenu);
        
    }

    const nav = document.getElementById('nav');

  return (
      
    <motion.nav 
    initial={{opacity: 0}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 0.8}}
    id={`nav`} className={`navbar nav-hidden navbar-expand-lg d-flex justify-content-between`}>
        
        <Link to='/' className="home link navbar-brand"><img src='assets/Logo.png' alt='logo' width='110px'></img></Link>
        
        {(toggleMenu || screenWidth > 1000) && (

            <ul className={toggleMenu? 'toggled-navbar-list': 'navbar-nav' }>
                
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                
            </ul> 
        )}

        {(toggleMenu || screenWidth < 1000) && (
        <button className={toggleMenu? 'button-toggled': 'button' } onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        )}
        
    </motion.nav>
  )
};

export default Nav;
