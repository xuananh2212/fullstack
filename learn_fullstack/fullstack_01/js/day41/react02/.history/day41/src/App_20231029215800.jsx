import React, { useState, useEffect } from 'react'

export default function App() {
     const [count, setCount] = useEffect(0);
     const handleClick = () => {
          setCount((count) => count + 1);
     };
     useEffect(() => {
          console.log("HELLO WORLD!");
     }, []);
     useEffect(() => {
          console.log("update...")
     }, [count])
     return (
          <div>
               <h1>Count: 0</h1>
               <button
                    onClick={handleClick}
               >Click Me</button>

          </div>
     )
}
