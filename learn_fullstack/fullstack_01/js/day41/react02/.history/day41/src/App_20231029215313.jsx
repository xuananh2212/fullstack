import React, { useState, useEffect } from 'react'

export default function App() {
     const [count, setCount] = useEffect(0);
     return (
          <div>
               <h1>Count: 0</h1>
               <button>Click Me</button>

          </div>
     )
}
