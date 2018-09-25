import React from 'react';
import '../Styles/ContactStyle.css';
import '../Styles/FullScreenPageStyle.css';
import {NavLink} from 'react-router-dom';

const Contact =()=> (
  <div className='ContactContainer'>
    <NavLink id='artist' className='Artist' to='/'>MARIOS TSIPOPOULOS</NavLink>

    <div>
    MARIOS TSIPOPOULOS
    email : ....
    </div>
  </div>
)

export default Contact;
