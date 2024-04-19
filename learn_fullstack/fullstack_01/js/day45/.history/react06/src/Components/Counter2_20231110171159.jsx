import React, { useLayoutEffect, useState } from 'react'

export default function Counter2() {
     const [counter, setCounter] = useState(0);
     const handleClick = () => {
          setCounter(counter + 1);
     }
     useLayoutEffect(() => {
          if (counter === 5) {
               setCounter(0)
          }
     })
     return (
          <div>
               <h1>useLayoutEffect Couter: {counter}</h1>
               <button onClick={handleClick}>+</button>

          </div>
     )
}
