import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {images} from '../Data/imageData.js';
import '../Styles/SideBarStyle.css';
import PersonalPage from './PersonalPage';
import PhotoProject from './PhotoProject';
import VideoProject from './VideoProject';
import FullScreenPage from './FullScreenPage';
import NotFound from './NotFound';

const active = {color: '#878787'};

const Desktop = () => {
  return(
    <Router>
      <div>
        <div className='SideBar'>

          {images.map((project, index) =>
          <NavLink key={index} activeStyle={active} className='Project' to={`/${project}`} >Project {index+1}</NavLink>
          )}
          <NavLink activeStyle={active} className='Project' to='/video' >Videos</NavLink>
        </div>
        <Switch>
          {images.map((project, index) =>
            <Route key={index} exact path={`/${project}/:id`} render={(props)=><FullScreenPage {...props} project={`/${project}`}/>} />
          )}
          {images.map((project, index) =>
            <Route key={index} exact path={`/${project}`} render={(props)=><PhotoProject {...props} project={`/${project}`}/>} />
          )}
          <Route exact path='/' component={(props)=> <PersonalPage {...props}/>} />
          <Route exact path='/video' component={VideoProject} />
          <Route component={NotFound} />
        </Switch >
      </div>
    </Router>
  );
}


export default Desktop;
