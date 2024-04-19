import React, { useEffect, useRef } from 'react'
import Video from './Video'

export default function VideoPlayer() {
     const videoRef = useRef();
     useEffect(() => {
          console.log(videoRef.current)
     })
     useImperativeHandle(ref, () => ({
          play: () => {
               videoRef.current.play();
          },
          pause: () => {
               videoRef.current.pause();
          }
     }))
     return (
          <div>
               <Video ref={videoRef} />
               <hr />
               <button onClick={() => videoRef.current.play()}>play</button>
               <button onClick={() => videoRef.current.pause()}>pause</button>
          </div>
     )
}
