import React from 'react';
import './Portofolio.css';
import { Link } from 'react-router-dom';
import { portofolioItems } from '../../portofolioItems';

const Portfolio = () => {

  return (
  
  <div className='portfolio'>
      <h1>portofoliu</h1>

      <div className="portofolio-grid">
        {portofolioItems.map((item) => (
            <div style={{backgroundImage: `url(${item.image})`}} className={`item ${item.tittle}`}>
                <Link className='a' to={`/project/${item.id}`}>
                    <h3>{item.tittle}</h3>
                    <p className='services'>{item.services}</p>
                </Link>
            </div>
        ))}
      </div>
  </div>
    
    
    );
};

export default Portfolio;
