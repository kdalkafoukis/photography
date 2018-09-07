import React from 'react';
import '../Styles/PersonalPageStyle.css';
import pic from '../Pictures/Project1/1.jpg';

const PersonalPage =(props)=> (
  <div className='personalPageContainer'>
    <div>
      <img className='image' src={pic} alt=''/>
    </div>
  </div>
);

export default PersonalPage;
