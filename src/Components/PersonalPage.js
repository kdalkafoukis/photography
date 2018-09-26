import React from 'react';
import '../Styles/PersonalPageStyle.css';

const PersonalPage =()=>(
  <div className='personalPageContainer'>
    <div className='personalPageHeader'>
      MARIOS CHRISTOS TSIPOPOULOS
    </div>
    <br/>
    <div className='personalPageSubHeader'>
      DIRECTOR / DIRECTOR OF PHOTOGRAPHY / EDITOR
    </div>
    <br/>
    <br/>
    <br/>
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
      <div className='personalPageBody'>
        Tel: UK: 07842857347
      </div>
      <div className='personalPageBody'>
        Tel: GR: 6984146244
      </div>
    </div>
  </div>
);

export default PersonalPage;
