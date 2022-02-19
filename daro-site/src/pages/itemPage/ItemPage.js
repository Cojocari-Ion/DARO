import React from 'react';
import { portofolioItems } from '../../portofolioItems';
import { useParams } from 'react-router-dom';
import './ItemPage.css';
import HeaderSection from './HeaderSection/HeaderSection';
import DesignSection from './DesignSection/DesignSection';
import InstaStories from './InstaStories/InstaStories';
import { useEffect } from 'react';


const ItemPage = () => {

    const { id } = useParams();
    const project = portofolioItems[id];
  

    useEffect(() => {
      
      window.scrollTo(0, 0)
     
  }, []);

  return (

    <div className='project-page'>

        <HeaderSection project={project} />

        <DesignSection project={project} />

        <InstaStories project={project} />

    </div>
  
  );
};

export default ItemPage;
