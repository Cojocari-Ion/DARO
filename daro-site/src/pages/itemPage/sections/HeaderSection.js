import React from 'react';
import './HeaderSection.css';



const HeaderSection = ({project}) => {

    

  return (
      <div className="header-section">
          
        <div className="decoration">

            <div className="flexible-container">

                <img className='circle' src="assets/project-page-deco/dottedcircle.png" alt="circle" />

            </div>

        </div>

        <div className="elements">

            <h1>{project.tittle}</h1>
            
            <ul>
                {project.services.map((item) => (
                    <li>{item}</li>
                ))}

            </ul>

        </div>
      </div>
  );

};

export default HeaderSection;
