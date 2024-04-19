import React from 'react'
import { useSelector } from "../core/useSelector";
export default function Counter() {
     const data = useSelector();
     const handleClick = () => {
          data.dispatch({ type: "counter/increment" })
     }
     return (
          <>
               <div>{data.count}</div>
               <button onClick={handleClick}>click me</button>
          </>
     )
}
