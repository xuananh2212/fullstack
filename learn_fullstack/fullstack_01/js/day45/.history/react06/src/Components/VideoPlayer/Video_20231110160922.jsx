import React, { forwardRef } from 'react'
import videoPlayer from './videoPlayer.mp4'

function Video(props, ref) {
     return (
          <video src={videoPlayer}></video>
     )
}

export default forwardRef(Video)
