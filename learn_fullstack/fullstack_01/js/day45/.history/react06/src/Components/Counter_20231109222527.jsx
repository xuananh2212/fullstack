import React, { useState } from 'react'
import Content from './Content';

export default function Counter() {
     const [counter, setCounter] = useState(0);
     const handleClick = () => {
          setCounter(counter + 1);
     }
     return (
          <div>
               <h1>Counter: {counter}</h1>
               <button onClick={handleClick}>+</button>
               <Content counter={counter} heading={"tuananh"} />
          </div>
     )
}
