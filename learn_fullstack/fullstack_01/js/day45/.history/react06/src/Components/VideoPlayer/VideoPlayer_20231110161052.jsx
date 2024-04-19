import React, { useRef } from 'react'
import Video from './Video'

export default function VideoPlayer() {
     const videoRef = useRef();
     return (
          <div>
               <Video ref={videoRef} />
               <hr />
               <button onClick={() => videoRef.current.play()}>play</button>
               <button onClick={() => videoRef.current.pause()}>pause</button>
          </div>
     )
}
