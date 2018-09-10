// 'https://stackoverflow.com/questions/39517830/render-iframe-video-using-youtubes-js-api-with-reactjs'
// 'https://developers.google.com/youtube/iframe_api_reference'

import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/custombootstrap.css';
import '../Styles/VideoStyle.css';
import tileData from '../Data/videoData.js';

const stopVideo = () => {
  this.player.stopVideo();
}

const onPlayerReady = (event) => {
  event.target.playVideo();
}

let done = false;
const onPlayerStateChange = (event,YT) => {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

let loadYT;
const VideoProject =(props)=>{
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
    this.player = new YT.Player(this.youtubePlayerAnchor, {
      height: 480,
      width: 640,
      videoId: 'M7lc1UVf-VE',
      events: {
        // onReady: onPlayerReady,
        onStateChange: (event) => onPlayerStateChange(event,YT)
      }
    })
  })

  return (
    <div className='videoContainer'>
      <div id='player' className='player' ref={(r) => { this.youtubePlayerAnchor = r }}></div>
    </div>
  );
}
export default VideoProject;
//
// const VideoProject =(props)=>{
//   const project = props.project.split('/')[1];
//   return (
//     <div className='card-columns projectContainer'>
//       {tileData[project].map((data,index)=>
//         <Link key={index} className='card' to={`${props.project}/${data.title}`}>
//           <img className='card-img img-fluid' src={data.src} alt=''/>
//         </Link>
//       )}
//     </div>
//   );
// }
// export default VideoProject;
