import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import videoPlayer from './videoPlayer.mp4'

function Video(props, ref) {
     const videoRef = useRef();
     useImperativeHandle(ref, () => ({
          play: () => {
               videoRef.current.play();
          },
          pause: () => {
               videoRef.current.pause();
          }
     }))
     return (
          <video ref={videoRef} src={videoPlayer}></video>
     )
}

export default forwardRef(Video)
