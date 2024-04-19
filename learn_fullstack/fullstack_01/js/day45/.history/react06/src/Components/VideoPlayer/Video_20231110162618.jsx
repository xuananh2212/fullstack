import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import videoPlayer from './videoPlayer.mp4'

function Video(props, ref) {
     const videoRef = useRef();
     useImperativeHandle(ref, () => ({
          play: () => {
               videoRef.play();
          },
          pause: () => {
               videoRef.pause();
          }
     }))
     return (
          <video ref={Video} src={videoPlayer}></video>
     )
}

export default forwardRef(Video)
