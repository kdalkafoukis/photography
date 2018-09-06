import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../Styles/SideBarStyle.css';
import '../Styles/App.css'
import PersonalPage from './PersonalPage'
import Project from './Project'
import FullScreenPage from './FullScreenPage'
import {projects} from '../Data/projectData.js';

const active = {color: '#878787'}

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='SideBar'>
          <NavLink className='Name' to='/'>MARIOS TSIPOPOULOS</NavLink>
          {projects.map((project, index) =>
          <NavLink key={index} activeStyle={active} className='Project' to={`/${project}`} >Project {index+1}</NavLink>
          )}
        </div>
        <Switch>
          <Route exact path='/' component={PersonalPage} />
          {projects.map((project, index) =>
            <Route key={index} path={`/${project}/:id`} render={(props)=><FullScreenPage {...props} project={`/${project}`}/>} />
          )}
          {projects.map((project, index) =>
            <Route key={index} path={`/${project}`} render={(props)=><Project {...props} project={`/${project}`}/>} />
          )}
        </Switch >
      </div>
    </Router>
  );
}

export default App;
