import React from 'react';

import {Link} from 'react-router-dom';

import tileData from '../Data/project2Data.js'

import '../Styles/custombootstrap.css';

const Project2 =(props)=>{
    return (
      <div style={{marginLeft:'330px',padding:40}} className='card-columns'>
          {tileData.map((data,index)=>(
              <Link key={index} className='card' to={`/project2/${data.title}`}>
                  <img className='card-img img-fluid' src={data.src} alt=''/>
              </Link>
          ))}
      </div>
    )
}
export default Project2;
