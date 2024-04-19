import React, { useRef, useState } from 'react'

export default function Search() {
     const helloRef = useRef(0);
     const [count, setCount] = useState(0);

     console.log(helloRef);
     return (
          <div>
               <input
                    type="text"
                    placeholder='nhap tu khoa tim kiem'
               />
               <button
               >on onClick</button>
          </div>
     )
}
