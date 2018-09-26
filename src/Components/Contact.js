import React from 'react';
import {NavLink} from 'react-router-dom';
import instagram from '../Icons/instagram.svg';
import facebook from '../Icons/facebook.svg';
import youtube from '../Icons/youtube.svg';
import '../Styles/ContactStyle.css';

const Instagram = () => {
  window.location.href = 'https://www.instagram.com/marios_tsipos/?hl=en'
}

const Facebook = () => {
  window.location.href = 'https://www.facebook.com/marios.tsipos'
}

const Youtube = () => {
  window.location.href = 'https://www.youtube.com/channel/UCL4u_oRbijJdYp0FdOq44vw'
}

const Contact =()=> (
  <div className='personalPageContainer'>
    <NavLink id='artist' className='Artist' to='/'>MARIOS CHRISTOS TSIPOPOULOS</NavLink>

    <div className='personalPageSubHeader'>
      DIRECTOR / DIRECTOR OF PHOTOGRAPHY / EDITOR
    </div>
    <br/>
    <div className='contactPageWrapper'>
        <img onClick={Instagram} className='contactPageIcons' src={instagram} alt=''/>
        &nbsp;
        &nbsp;
        <img onClick={Facebook} className='contactPageIcons' src={facebook} alt=''/>
        &nbsp;
        &nbsp;
        <img onClick={Youtube} className='contactPageIcons' src={youtube} alt=''/>
    </div>
    <br/>
    <div className='contactTelephones'>
    <div className='personalPageBody'>
      Tel: UK: 07842857347
    </div>
    &nbsp;
    <div className='personalPageBody'>
      Tel: GR: 6984146244
    </div>
    </div>
  </div>
);

export default Contact;
