import React, { forwardRef } from 'react'

function Button(prop, ref) {
     return (
          <div ref={ref}>Button</div>
     )
}

export default forwardRef(Button);
