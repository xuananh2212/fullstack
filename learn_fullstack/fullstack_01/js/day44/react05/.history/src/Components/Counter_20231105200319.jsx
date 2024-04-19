import React from 'react'
import { useSelector } from "../core/useSelector";
export default function Counter() {
     const data = useSelector();
     const handleClick = () => {
          data.dispatch({ type: "counter/increment" })
     }
     return (
          <>
               <div>Counter:{data.state.count}</div>
               <button onClick={handleClick}>+</button>
               <button onClick={handleClick}>-</button>
          </>
     )
}
