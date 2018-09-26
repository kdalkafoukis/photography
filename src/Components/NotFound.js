import React from 'react';
import '../Styles/NotFoundStyle.css';
import {NavLink} from 'react-router-dom';

const NotFound =()=>(
  <div>
    <NavLink id='artist' className='Artist' to='/'>MARIOS CHRISTOS TSIPOPOULOS</NavLink>
    <div className='notFoundContainer'>
      404 ERROR Not Found
    </div>
  </div>
);

export default NotFound;
