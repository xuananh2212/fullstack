import React, { useState } from 'react'

export default function Counter2() {
     const [counter, setCounter] = useState(0);

     return (
          <div>
               <h1>useLayoutEffect Couter: {counter}</h1>

          </div>
     )
}
