// 'https://stackoverflow.com/questions/39517830/render-iframe-video-using-youtubes-js-api-with-reactjs'
// 'https://developers.google.com/youtube/iframe_api_reference'
// 'https://jsfiddle.net/wzalazar/72NYY/'
import React from 'react';
import '../Styles/custombootstrap.css';
import '../Styles/VideoStyle.css';
import videos from '../Data/videoData.js';
import {NavLink} from 'react-router-dom';

const stopVideo = (index) => {
  this.player[index].stopVideo();
}

const onPlayerReady = (event,index) => {
  if (index===0){
    event.target.playVideo();
  }
}

let done = false;
const onPlayerStateChange = (event,YT,index) => {
  if (event.data === YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo,2 * 1000,index);
    done = true;
  }
}
const creatPlayer = (playerInfo,index,YT) => {
  return new YT.Player(playerInfo.id, {
    // height: 480,
    // width: 640,
    videoId: playerInfo.videoId,
    events: {
      onReady: (event) => onPlayerReady(event,index),
      onStateChange: (event) => onPlayerStateChange(event,YT,index)
    }
  })
}

let loadYT;
const VideoProject =(props)=>{
  this.player =[]
  const project = 'project1';

  if (!loadYT) {
    loadYT = new Promise((resolve) => {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      window.onYouTubeIframeAPIReady = () => resolve(window.YT)
    })
  }

  loadYT.then((YT) => {
    videos[project].forEach((playerInfo,index)=>{
      const currentplayer = creatPlayer(playerInfo,index,YT)
      this.player.push(currentplayer)
    })
  });
  return (
    <div className='card-columns videoContainer'>
      <NavLink id='artist' className='Artist' to='/'>MARIOS TSIPOPOULOS</NavLink>

      {videos[project].map((data,index)=>
        <div key={index} className='card'>
          <div className='player' id={`player${index+1}`}/>
        </div>
      )}
    </div>
  );
}

export default VideoProject;
