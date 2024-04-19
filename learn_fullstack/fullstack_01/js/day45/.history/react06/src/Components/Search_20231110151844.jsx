import React, { useRef, useState } from 'react'
import Button from './Button';

export default function Search() {
     const inputRef = useRef();
     const buttonRef = useRef();
     const [count, setCount] = useState(0);
     const handleClick = () => {
          setCount(count + 1);
          console.log(inputRef.current);
          console.log(buttonRef.current)


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
               <Button />
          </div>
     )
}
