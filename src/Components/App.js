import React from 'react';
import ReactDOM from 'react-dom';
import Desktop from './Desktop';
import Mobile from './Mobile';
import '../Styles/App.css';

const Switch = () => {
  const node = document.getElementById('AppWrapper')
  const width = window.innerWidth
  if(width<800){
    if(this.control){
      this.control = false;
      ReactDOM.render(<Mobile />, document.getElementById('AppWrapper'))
    }
  }
  else{
    if(!this.control){
      this.control = true;
      ReactDOM.render(<Desktop />, document.getElementById('AppWrapper'))
    }
  }
}

const App = () => {
  let component = <Desktop/>
  this.control = true;
  const width = window.innerWidth
  if(width<800){
    this.control = false;
    component = <Mobile/>
  }
  this.listener = window.addEventListener('resize',Switch);

  return (
    <div id='AppWrapper'>
      {component}
    </div>
  );
}
export default App;
