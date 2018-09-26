import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {images} from '../Data/imageData.js';
import {videos} from '../Data/videoData.js';
import '../Styles/MenuStyle.css';
import PhotoProject from './PhotoProject';
import VideoProject from './VideoProject';
import NotFound from './NotFound';
import Contact from './Contact';

const active = {color: '#878787'};

const Mobile = () => (
  <Router>
    <div className='MenuContainer'>
      <NavLink className='Artist2' to='/'>MARIOS CHRISTOS TSIPOPOULOS</NavLink>
      <div className='Menu'>
        {images.map((project, index) =>
        <NavLink key={index} activeStyle={active} className='Project' to={`/${project}`} >Project {index+1}</NavLink>
        )}
        {videos.map((project, index) =>
        <NavLink key={index} activeStyle={active} className='Project' to={`/${project}`} >{project}</NavLink>
        )}      </div>
      <Switch>
        <Route exact path='/' component={()=><Contact/>} />
        {images.map((project, index) =>
          <Route key={index} exact path={`/${project}/:id`} render={(props)=><PhotoProject {...props} project={`/${project}`}/>} />
        )}
        {images.map((project, index) =>
          <Route key={index} exact path={`/${project}`} render={(props)=><PhotoProject {...props} project={`/${project}`}/>} />
        )}
        {videos.map((project, index) =>
          <Route key={index} exact path={`/${project}`} render={(props)=><VideoProject {...props} project={`/${project}`}/>} />
        )}
        <Route component={NotFound} />
      </Switch >
    </div>
  </Router>
);

export default Mobile;
