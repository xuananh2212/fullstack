import React, { forwardRef } from 'react'
import videoPlayer from './videoPlayer.mp4'

function Video(props, ref) {
     return (
          <video ref={ref} src={videoPlayer}></video>
     )
}

export default forwardRef(Video)
