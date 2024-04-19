import React, { useState } from 'react'

export default function Counter2() {
     const [counter, setCounter] = useState(0);
     const handleClick = () => {

     }
     return (
          <div>
               <h1>useLayoutEffect Couter: {counter}</h1>
               <button onClick={handleClick}>+</button>

          </div>
     )
}
