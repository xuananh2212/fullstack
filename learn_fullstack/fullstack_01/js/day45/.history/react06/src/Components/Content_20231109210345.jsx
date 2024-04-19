import React from 'react'

function Content({ heading }) {
     console.log('re-render')
     return (
          <div>Content</div>
     )

}

export default React.memo(Content)
// higher Order component