import React from 'react';
import './Nav.css'
import { useState, useEffect } from 'react';

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
    }, [])
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        
        <a className="navbar-brand" href="#"><img src='assets/Logo.png' alt='logo' width='123px'></img></a>
        
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
                <li className="nav-item">
                <a className="nav-link" href='#'>Disabled</a>
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
        
    </nav>
  )
};

export default Nav;
