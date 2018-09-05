import React from 'react';
import { BrowserRouter as Router, Route,NavLink,Switch } from 'react-router-dom';
import '../Styles/SideBarStyle.css';
import '../Styles/App.css'

import PersonalPage from './PersonalPage'
import Project1 from './Project1'
import FullScreenPage from './FullScreenPage'
import Project2 from './Project2'
import FullScreenPage2 from './FullScreenPage2'

const active = {color: '#878787'}

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='SideBar'>
            <NavLink className='Name' to='/'>MARIOS TSIPOPOULOS</NavLink>
            <NavLink activeStyle={active} className='Project' to='/project1' >Project 1</NavLink>
            <NavLink activeStyle={active} className='Project' to='/project2' >Project 2</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={PersonalPage} />
          <Route path="/project1/:id" component={FullScreenPage} />
          <Route path='/project1' component={Project1} />
          <Route path="/project2/:id" component={FullScreenPage2} />
          <Route path='/project2' component={Project2} />
        </Switch >
      </div>
    </Router>
  );
}

export default App;
