import React, { useRef } from 'react'
import Video from './Video'

export default function VideoPlayer() {
     const videoRef = useRef();
     return (
          <div>
               <Video ref={videoRef} />
               <hr />
               <button onClick={() => }>play</button>
               <button>pause</button>
          </div>
     )
}
