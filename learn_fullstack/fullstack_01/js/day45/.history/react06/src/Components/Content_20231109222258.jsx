import React from 'react'
import Reactmemo from '../lib/Reactmemo'

function Content({ heading, counter }) {
     console.log('re-render')
     return (
          <div>Content : {heading}: {counter}</div>
     )

}

export default Reactmemo(Content)
// higher Order component (hoc)