import React from 'react';
import dotted from './images/dottedimage.png';
import blured from './images/blured.png'
import './HeaderSection.css';
import arrow from './images/arrow.png'


const HeaderSection = ({project}) => {
  return (
    <div className='header-section'>
        
        <div className="decoration">

            <div className="flexible-container">

                <img className='deco-images dotted' src={dotted} width='1000px' alt="circle" />

                <img className='deco-images blured' src={blured} alt="blured" />

                <img className='deco-images arrow' src={arrow} alt='arrow' />
                
            </div>

        </div>

    </div>
  )
}

export default HeaderSection