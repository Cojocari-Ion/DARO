import React from 'react';
import './Projects.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import {  useViewportScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';

const Projects = () => {

    const projects = [
        {
            id: 0,
            title: 'dulcinella',
            image: 'assets/projects/dulcinella.png'
        },

        {
            id: 1,
            title: 'loial',
            image: 'assets/projects/loial.png'
        },

        {
            id: 2,
            title: 'babyboom',
            image: 'assets/projects/babyboom.png'
        },

        {
            id: 3,
            title: 'bomba',
            image: 'assets/projects/bomba.png'
        },

        {
            id: 4,
            title: 'trend',
            image: 'assets/projects/trend.png'
        },

        {
            id: 5,
            title: 'inamstro',
            image: 'assets/projects/inamstro.png'
        }
    ]


  return (
    
    <div className='projects'>
        <motion.div transition={{duration: 1}} className='floated-bg'>
            <img width='1600px' src="assets/projects/bg.png" alt="" />
        </motion.div>

        <span>portofolio</span>

        <div className="elements">
            <h2>portofolio</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <div style={{backgroundImage: `url(${project.image})`}} className={`project ${project.title}`}>
                        <a href="#">
                            <p className='text'>vezi proiectul</p>
                        </a>
                    </div>
                ))}
            </div>
            
            <Link className='link' to='/portofolio'>
                <button type='button'>vezi totul</button>
            </Link>

        </div>

    </div>
  
    );
};

export default Projects;
