import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/custombootstrap.css';
import '../Styles/PhotoStyle.css';
import tileData from '../Data/imageData.js';

const PhotoProject =(props)=>{
  const project = props.project.split('/')[1];
  return (
    <div className='card-columns projectContainer'>
      {tileData[project].map((data,index)=>
        <Link key={index} className='card' to={`${props.project}/${data.title}`}>
          <img className='card-img img-fluid' src={data.src} alt=''/>
        </Link>
      )}
    </div>
  );
}
export default PhotoProject;
