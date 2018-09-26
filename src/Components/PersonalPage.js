import React from 'react';
import '../Styles/PersonalPageStyle.css';
import instagram from '../Icons/instagram.svg';
import facebook from '../Icons/facebook.svg';
import youtube from '../Icons/youtube.svg';

const Instagram = () => {
  window.location.href = 'https://www.instagram.com/marios_tsipos/?hl=en'
}

const Facebook = () => {
  window.location.href = 'https://www.facebook.com/marios.tsipos'
}

const Youtube = () => {
  window.location.href = 'https://www.youtube.com/channel/UCL4u_oRbijJdYp0FdOq44vw'
}

const PersonalPage =()=>(
  <div className='personalPageContainer'>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div className='personalPageHeader'>
        MARIOS CHRISTOS TSIPOPOULOS
      </div>
      <br/>
      <div className='personalPageSubHeader'>
        DIRECTOR / DIRECTOR OF PHOTOGRAPHY / EDITOR
      </div>
      <br/>
      <div className='personalPageWrapper'>
          <img onClick={Instagram} className='personalPageIcons' src={instagram} alt=''/>
          &nbsp;
          <img onClick={Facebook} className='personalPageIcons' src={facebook} alt=''/>
          &nbsp;
          <img onClick={Youtube} className='personalPageIcons' src={youtube} alt=''/>
      </div>
      <br/>
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        <div className='personalPageBody'>
          Tel: UK: 07842857347
        </div>
        &nbsp;
        <div className='personalPageBody'>
          GR: 6984146244
        </div>
      </div>
      <br/>
      <div className='personalPageMail'>
        mariostsiposfilm@gmail.com
      </div>
    </div>
  </div>
);

export default PersonalPage;
