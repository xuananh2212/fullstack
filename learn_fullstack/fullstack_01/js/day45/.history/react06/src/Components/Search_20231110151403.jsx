import React, { useRef, useState } from 'react'

export default function Search() {
     const inputRef = useRef(0);
     const [count, setCount] = useState(0);
     const handleClick = () => {
          setCount(count + 1);
          helloRef.current++;


     }
     return (
          <div>
               <input
                    ref={inputRef}
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
