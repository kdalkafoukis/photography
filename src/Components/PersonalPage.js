import React from 'react';

import pic1 from '../Pictures/Project1/1.jpg'

import '../Styles/PersonalPageStyle.css';

const PersonalPage =(props)=> {
  console.log('PersonalPage',props);
  return(
    <div style={{marginLeft:'330px',padding:40}}>
        <img style={{width: '90%',height:'100%'}} src={pic1} alt=''/>
    </div>
  )
}

export default PersonalPage;
