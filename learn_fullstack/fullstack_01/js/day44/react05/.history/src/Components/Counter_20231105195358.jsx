import React from 'react'
import { useSelector } from "./core/useSelector";
export default function Counter() {
     const data = useSelector();
     return (
          <>
               <div>Counter</div>
               <button>click me</button>
          </>
     )
}
