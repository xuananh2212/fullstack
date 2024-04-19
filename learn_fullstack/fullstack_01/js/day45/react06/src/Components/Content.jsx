// eslint-disable-next-line no-unused-vars
import React from 'react'
import Reactmemo from '../lib/Reactmemo'

// eslint-disable-next-line react/prop-types
function Content({ heading, counter }) {
     console.log('re-render')
     return (
          <div>Content : {heading}: {counter}</div>
     )

}

export default Reactmemo(Content)
// higher Order component (hoc)