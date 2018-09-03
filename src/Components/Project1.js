import React from 'react';

import {Link} from 'react-router-dom';

import tileData from '../Data/project1Data.js'

import '../Styles/custombootstrap.css';

const Project1 =(props)=>{
    console.log('Project1',props);
    return (
      <div style={{marginLeft:'330px',padding:40}} className='card-columns'>
          {tileData.map((data,index)=>(
              <Link key={index} className='card' to={`/project1/${data.title}`}>
                  <img className='card-img img-fluid' src={data.src} alt=''/>
              </Link>
          ))}
      </div>
    )
}
export default Project1;
