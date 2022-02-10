import React from 'react';
import './Projects.css';
import { Link } from "react-router-dom";
import { projects } from '../../Projects';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import {  useViewportScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';

const Projects = () => {


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
                        <Link className='a' to={`/projects/${project.id}`}>
                            <h3>{project.title}</h3>
                            <p className='services'>{project.services}</p>
                        </Link>
                    </div>
                ))}
            </div>
            
            <Link className='link' to='/portfolio'>
                <button type='button'>vezi totul</button>
            </Link>

        </div>

    </div>
  
    );
};

export default Projects;
