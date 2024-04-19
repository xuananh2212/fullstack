import React, { useReducer } from 'react'


export default function Counter() {
     const reducer = (state, action) => {

     }
     const [state, dispatch] = useReducer(reducer, {
          count: 0
     });
     const handleIncrement = () => {
          dispatch(state + 1);
     }
     return (
          <div>
               <h1>Count: {state}</h1>
               <button>-</button>
               <button onClick={handleIncrement}>+</button>
          </div>
     )
}
