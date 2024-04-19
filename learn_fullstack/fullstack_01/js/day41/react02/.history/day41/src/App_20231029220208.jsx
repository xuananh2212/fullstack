import React, { useState, useEffect } from 'react';

export default function App() {
     console.log(1);
     const [count, setCount] = useState(0);
     const [todoList, setTodoList] = useState([]);
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
