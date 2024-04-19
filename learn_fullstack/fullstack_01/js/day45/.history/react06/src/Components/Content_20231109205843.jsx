import React from 'react'

function Content(counter) {
     console.log("re-render")
     return (
          <div>{counter}</div>
     )
}

export default React.memo(Content);



