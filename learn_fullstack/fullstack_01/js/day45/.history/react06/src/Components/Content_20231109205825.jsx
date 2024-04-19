import React from 'react'

function Content() {
     console.log("re-render")
     return (
          <div>Content</div>
     )
}

export default React.memo(Content);



