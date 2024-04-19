import React from 'react'
import { useSelector } from "../core/useSelector";
export default function Counter() {
     const data = useSelector();
     const handleClickIncrement = () => {
          data.dispatch({ type: "counter/increment" })
     }
     const handleClickDeincrement = () => {
          data.dispatch({ type: "counter/increment" })
     }
     return (
          <>
               <div>Counter:{data.state.count}</div>
               <button onClick={handleClickIncrement}>+</button>
               <button onClick={handleClickDeincrement}>-</button>
          </>
     )
}
