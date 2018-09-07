import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/custombootstrap.css';
import '../Styles/ProjectStyle.css';
import tileData from '../Data/videoData.js';

const VideoProject =(props)=>{
  const project = props.project.split('/')[1];
  return (
    <div className='card-columns projectContainer'>
      {tileData[project].map((data,index)=>
        <Link key={index} className='card' to={`${props.project}/${data.title}`}>

        </Link>
      )}
    </div>
  );
}
export default VideoProject;
// <img className='card-img img-fluid' src={data.src} alt=''/>
