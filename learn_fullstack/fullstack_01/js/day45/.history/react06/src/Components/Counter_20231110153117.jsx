import React, { useState, useRef } from 'react'
import Content from './Content';
import Button from './Button';

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
