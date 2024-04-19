import React, { useRef } from 'react'

export default function Search() {
     const helloRef = useRef();
     console.log(helloRef);
     return (
          <div>
               <input type="text" placeholder='nhap tu khoa tim kiem' />
          </div>
     )
}
