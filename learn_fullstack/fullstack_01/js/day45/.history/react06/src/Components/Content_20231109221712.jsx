import React from 'react'
import Reactmemo from '../lib/Reactmemo'

function Content({ heading }) {
     console.log('re-render')
     return (
          <div>Content : {heading}</div>
     )

}

export default Reactmemo(Content)
// higher Order component (hoc)