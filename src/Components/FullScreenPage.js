
import React from 'react';
import loadImage from 'blueimp-load-image';
import {Route} from 'react-router-dom';
import '../Styles/FullScreenPageStyle.css';
import tileData from '../Data/projectData.js';

// const removeListener = () => {
//   console.log('1',this.listener);
//   if(this.listener){
//     this.listener = window
//       .removeEventListener('resize',()=>{
//
//       });
//     console.log('2',this.listener);
//     this.listener = ''
//   }
//   console.log('3',this.listener);
// }

const change = (props,control) => {
  const project = props.location.pathname.split('/')[1];
  const projectName = props.match.params.id;
  const length = tileData[project].length-1;
  let id;
  tileData[project].forEach((data,index) =>{
    if (projectName === data.title){
      id = index;
    }
  })

  let title;
  if(control === 'increase'){
    if (id < length){
      id = id+1;
    }
    else{
      id = 0;
    }
  }
  else if (control === 'decrease') {
    if (id > 0){
      id = id-1;
    }
    else{
      id = length;
    }
  }
  title = tileData[project][id].title;
  const location = props.project+'/'+title;
  return location;
}

const Thumbnails = (props) => {
  const location = props.project+'/';
  return(
    <Route render={({ history}) => (
      <div className='showthumbnails' onClick={() => {history.push(location)}}></div>
  )} />
)}

const Increase = (props) => {
  const location = change(props,'increase')
  return(
    <Route render={({ history}) => (
      <div className='next' onClick={() => {history.push(location)}}></div>
  )} />
)}

const Decrease = (props) => {
  const location = change(props,'decrease')
  return(
    <Route render={({ history}) => (
      <div className='prev' onClick={() => {history.push(location)}}></div>
  )} />
)}


const IncreaseButton = (props) => {
  const location = change(props,'increase')
  return(
    <Route render={({ history}) => (
      <div onClick={() => {history.push(location)}}>
        NEXT
      </div>
    )} />
)}

const DecreaseButton = (props) => {
  const location = change(props,'decrease')
  return(
    <Route render={({ history}) => (
      <div onClick={() => {history.push(location)}}>
        PREV
      </div>
    )} />
)}

const ThumbnailsButton = (props) => {
  const location = props.project+'/';
  return(
    <Route render={({ history}) => (
      <div onClick={() => {history.push(location)}}>
        SHOW THUMBNAILS
      </div>
    )} />
)}

const BottomNavigation =  (props) =>(
  <div className='bottomNavigationContainer'>
    <div className='bottomNavigationWrapper'>
      <div className='BottomNavigationbutton1'>
        <DecreaseButton {...props}/>
      </div>
      <div className='BottomNavigationbutton1'> &nbsp;{'/'}&nbsp;</div>
      <div className='BottomNavigationbutton1'>
        <IncreaseButton {...props}/>
      </div>
    </div >
    <div className='BottomNavigationbutton2'>
      <ThumbnailsButton {...props}/>
    </div>
  </div>
)

const FullScreenPage =(props)=> {
  const project = props.location.pathname.split('/')[1];
  const projectName = props.match.params.id;
  let source;
  tileData[project].forEach(data =>{
    if (projectName === data.title){
      source = data.src;
    }
  })

  loadImage(
    source, (img) =>{
       const node = document.getElementsByTagName('canvas')
       if(node.length>0){
         node[0].remove();
       }
       document.getElementById('picture').appendChild(img);

       const style = node[0].style
       const width = node[0].width;
       const height = node[0].height;

       if(width<height){
         style.width = 'auto';
         style.maxHeight = '100%';
         style.maxWidth = '100%';
       }
       else{
         style.height = 'auto';
         style.maxWidth = '100%';
         style.maxHeight = '100%';
       }
       
       this.picStyle = document.getElementById('pic').style;
       this.picStyle.width = window.innerWidth-370 +'px';  //370= margin-left
       this.picStyle.height = '100vh';
       this.picStyle.paddingLeft = '40px';
       this.picStyle.paddingRight = '40px';

       this.listener = window
         .addEventListener('resize',()=>{
           this.picStyle.width = window.innerWidth+'px';
         });
    },
   {orientation:true}
  )

  return(
    <div className='mainContainer'>
      <BottomNavigation {...props}/>
      <PhotoNavigation {...props}/>
      <div id='picture'></div>
    </div>
  )
}

export default FullScreenPage;

const PhotoNavigation = (props) =>(
  <div id='pic' className='photoNavigationContainer'>
      <Decrease {...props}/>
      <Thumbnails {...props}/>
      <Increase {...props}/>
  </div>
)
