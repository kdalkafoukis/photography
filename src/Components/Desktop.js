import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {projects} from '../Data/projectData.js';
import '../Styles/SideBarStyle.css';
import PersonalPage from './PersonalPage';
import Project from './Project';
import FullScreenPage from './FullScreenPage';
import NotFound from './NotFound';
import Contact from './Contact';

const active = {color: '#878787'};

const Desktop = () => (
  <Router>
    <div>
      <div className='SideBar'>
        <NavLink className='Artist' to='/'>MARIOS TSIPOPOULOS</NavLink>
        {projects.map((project, index) =>
        <NavLink key={index} activeStyle={active} className='Project' to={`/${project}`} >Project {index+1}</NavLink>
        )}
        <NavLink activeStyle={active} className='Project' to='/contact' >Contact</NavLink>
      </div>
      <Switch>
        <Route exact path='/' component={PersonalPage} />
        {projects.map((project, index) =>
          <Route key={index} exact path={`/${project}/:id`} render={(props)=><FullScreenPage {...props} project={`/${project}`}/>} />
        )}
        {projects.map((project, index) =>
          <Route key={index} exact path={`/${project}`} render={(props)=><Project {...props} project={`/${project}`}/>} />
        )}
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch >
    </div>
  </Router>
);


export default Desktop;
