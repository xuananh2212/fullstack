import React from 'react'

function Content({ heading }) {
     console.log('re-render')
     return (
          <div>Content : {heading}</div>
     )

}

export default React.memo(Content)
// higher Order component