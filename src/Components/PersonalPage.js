import React from 'react';

import pic1 from '../Pictures/Project1/1.jpg'

import '../Styles/PersonalPageStyle.css';

const PersonalPage =(props)=> {
  console.log('PersonalPage',props);
  return(
    <div className='mainContainer'>
      <div>
        <img className='image' src={pic1} alt=''/>
      </div>
    </div>
  )
}
export default PersonalPage;
