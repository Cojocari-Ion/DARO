import React from 'react';
import './Popup.css';



const Popup = ({ isOpened, changeOpened }) => {

  if(!isOpened) return null

  return (

    <div  className='popup'>

      <div onClick={changeOpened} className="bg">

      </div>

        <div className='container'>
          <h1>Popup</h1>
        </div>
    </div>

  );
  
};

export default Popup