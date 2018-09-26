import React from 'react';
import {NavLink} from 'react-router-dom';

const Contact =()=> (
  <div className='personalPageContainer'>
    <NavLink id='artist' className='Artist' to='/'>MARIOS CHRISTOS TSIPOPOULOS</NavLink>

    <div className='personalPageSubHeader'>
      DIRECTOR / DIRECTOR OF PHOTOGRAPHY / EDITOR
    </div>
    <br/>
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
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
