import React, { createContext, useEffect, useReducer } from 'react'
import { rootReducer } from './rootReducer';
export const ProviderContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
     console.log(children);
     const [state, dispatch] = useReducer(rootReducer, {
          messages: JSON.parse(localStorage.getItem("messages")) || []
     })
     useEffect(() => {
          var array = JSON.parse(localStorage.getItem("messages"));
          dispatch({ type: "message/add", payLoad: array })
     }, [state])
     const data = {
          state, dispatch
     }
     return (
          <ProviderContext.Provider value={data}>
               {children}
          </ProviderContext.Provider>
     )
}
