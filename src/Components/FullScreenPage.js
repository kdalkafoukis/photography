import React from 'react';

import loadImage from 'blueimp-load-image';

import {NavLink,Route} from 'react-router-dom';

import tileData from '../Data/project1Data.js'

import '../Styles/custombootstrap.css';

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
      <div onClick={() => {history.push(location)}}>
        NEXT
      </div>
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
      <div onClick={() => {history.push(location)}}>
        PREV
      </div>
    )} />
)}

const BottomNavigation =  (props) =>(
  <div style={{position: 'fixed',bottom:0,left:0,paddingLeft:40,paddingBottom:40}}>
    <div style={{display:'flex',flex:1}}>
      <div className='pointer'>
        <Decrease {...props}/>
      </div>
        &nbsp;{'/'}&nbsp;
      <div className='pointer'>
        <Increase {...props}/>
      </div>
    </div >
    <NavLink className='pointer' to={`/project1/`}>
      SHOW THUMBNAILS
    </NavLink>
  </div>
)

const FullScreenPage =(props)=> {
  const source = tileData[props.match.params.id-1].src;

  console.log('FullScreenPage',props);
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
         style.maxHeight = '100%'
       }
       else{
         style.height = 'auto';
         style.maxWidth = '100%';
       }

       console.log(document.getElementById('nav').style);
       // document.getElementById('nav').style.width = '100%';
       // document.getElementById('nav').style.height = 'auto';
       document.getElementById('nav').style.maxWidth = '100%';
       document.getElementById('nav').style.height = 'auto';
    },
   {orientation:true}
  )

  return(
    <div style={{display:'flex',flex:1,height:'100vh',marginLeft:'370px',padding:40}}>
      <BottomNavigation {...props}/>
      <PhotoNavigation/>
      <div id='picture'>
      </div>
    </div>
  )
}
export default FullScreenPage;

const PhotoNavigation = () =>(
  <div
    id='nav'
    style={{
      // marginLeft:'370px',
      // padding:40,
      // width:'100%',
      // height:this.height,
      // width:
      width:600,
      height:400,
      position:'fixed'
  }}>
  </div>
)

// const PhotoNavigation = () =>(
//   <div id='nav'
//     style={{
//       display:'flex',
//       flex:1,
//       // flexDirection:'column',
//       // width:'100%',
//       // padding:40,
//       position:'fixed'
//     }}>
//     <div style={{display:'flex',flex:1}}>1</div>
//     <div style={{display:'flex',flex:1}}>2</div>
//     <div style={{display:'flex',flex:1}}>3</div>
//   </div>
// )
