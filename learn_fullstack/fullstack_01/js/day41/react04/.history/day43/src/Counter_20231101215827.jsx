import React, { useReducer } from 'react'


export default function Counter() {
     const reducer = (state, action) => {
          switch (action.type) {
               // type: feature/action
               case "counter/increment": {
                    return { ...state, count: state.count + 1 }
               }
               case "counter/decrement": {
                    return { ...state, count: state.count - 1 }
               }
          }
     }
     const [state, dispatch] = useReducer(reducer, {
          count: 0
     });
     const handleIncrement = () => {
          dispatch({
               type: "counter/increment"
          });
     }
     return (
          <div>
               <h1>Count: {state.count}</h1>
               <button>-</button>
               <button onClick={handleIncrement}>+</button>
          </div>
     )
}
