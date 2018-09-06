import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/custombootstrap.css';
import tileData from '../Data/projectData.js';

const Project =(props)=>{
  const project = props.project.split('/')[1];
  return (
    <div style={{marginLeft:'330px',padding:40}} className='card-columns'>
      {tileData[project].map((data,index)=>
        <Link key={index} className='card' to={`${props.project}/${data.title}`}>
          <img className='card-img img-fluid' src={data.src} alt=''/>
        </Link>
      )}
    </div>
  )
}
export default Project;
