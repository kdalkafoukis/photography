import React from 'react';

import loadImage from 'blueimp-load-image';

import {NavLink,Route} from 'react-router-dom';

import tileData from '../Data/project1Data.js'

import '../Styles/FullScreenPageStyle.css';

const removeListener = () => {
  console.log('1',this.listener);
  if(this.listener){
    this.listener = window
      .removeEventListener('resize',()=>{

      });
    console.log('2',this.listener);
    this.listener = ''
  }
  console.log('3',this.listener);
}

const Thumbnails = (props) => {
  const location = '/project1/';
  return(
    <Route render={({ history}) => (
      <div className='showthumbnails' onClick={() => {history.push(location)}}></div>
  )} />
)}

const Increase = (props) => {
  let title;
  const split = props.location.pathname.split('/')[2];
  const num = parseInt(split,10);
  if (num < tileData.length){
    title = num+1;
  }
  else{
    title = 1;
  }
  const location = '/project1/'+title;
  return(
    <Route render={({ history}) => (
      <div className='next' onClick={() => {history.push(location)}}></div>
  )} />
)}

const Decrease = (props) => {
  let title;
  const split = props.location.pathname.split('/')[2];
  const num = parseInt(split,10);
  if (num > 1){
    title = num-1;
  }
  else{
    title = tileData.length;
  }
  console.log('render2',title);
  const location = '/project1/'+title;
  return(
    <Route render={({ history}) => (
      <div className='prev' onClick={() => {history.push(location)}}></div>
  )} />
)}


const IncreaseButton = (props) => {
  let title;
  const split = props.location.pathname.split('/')[2];
  const num = parseInt(split,10);
  if (num < tileData.length){
    title = num+1;
  }
  else{
    title = 1;
  }
  const location = '/project1/'+title;
  return(
    <Route render={({ history}) => (
      <div onClick={() => {history.push(location)}}>
        NEXT
      </div>
    )} />
)}

const DecreaseButton = (props) => {
  let title;
  const split = props.location.pathname.split('/')[2];
  const num = parseInt(split,10);
  if (num > 1){
    title = num-1;
  }
  else{
    title = tileData.length;
  }
  console.log('render2',title);
  const location = '/project1/'+title;
  return(
    <Route render={({ history}) => (
      <div onClick={() => {history.push(location)}}>
        PREV
      </div>
    )} />
)}

const ThumbnailsButton = (props) => {
  const location = '/project1/';
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
  const source = tileData[props.match.params.id-1].src;

  loadImage(
    source, (img) =>{
       const node = document.getElementsByTagName('canvas')
       if(node.length>0){
         node[0].remove()
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

       this.picStyle = document.getElementById('pic').style
       this.picStyle.width = node[0].clientWidth+'px',
       this.picStyle.height = node[0].clientHeight+'px'

       this.listener = window
         .addEventListener('resize',()=>{
           this.picStyle.width = node[0].clientWidth+'px',
           this.picStyle.height = node[0].clientHeight+'px'
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
