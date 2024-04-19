import React, { useState, useEffect } from 'react'

export default function App() {
     const [count, setCount] = useEffect(0);
     const handleClick = () => {
          setCount((count) => count + 1);
     };
     useEffect(() => {
          console.log("HELLO WORLD!");
     }, [])
     return (
          <div>
               <h1>Count: 0</h1>
               <button
                    onClick={this.handleClick}
               >Click Me</button>

          </div>
     )
}
