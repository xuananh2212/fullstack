import React from 'react'

function Content(counter) {
     console.log("re-render")
     return (
          <div>Content</div>
     )
}

export default React.memo(Content);



