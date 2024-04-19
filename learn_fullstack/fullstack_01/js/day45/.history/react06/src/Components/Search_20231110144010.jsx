import React, { useRef, useState } from 'react'

export default function Search() {
     const helloRef = useRef(0);
     const [count, setCount] = useState(0);
     const handleClick = () => {
          setCount(count + 1);
          helloRef.current++;

     }
     console.log(helloRef);
     return (
          <div>
               <input
                    type="text"
                    placeholder='nhap tu khoa tim kiem'
               />
               <button
                    onClick={handleClick}
               >on Click
               </button>
          </div>
     )
}
