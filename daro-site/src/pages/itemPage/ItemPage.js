import React from 'react';
import { portofolioItems } from '../../portofolioItems';
import { useParams } from 'react-router-dom';


const ItemPage = () => {

    const { id } = useParams();
    const project = portofolioItems[id];
    console.log(project);

  return (

    <div className='project-page'>
      <h1>{`hello, I am item page ${project.tittle}`}</h1>
    </div>
  
  );
};

export default ItemPage;
