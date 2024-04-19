import React, { createContext, useReducer } from 'react'
export const ProviderContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
     console.log(children);
     const [state, dispatch] = useReducer()
     const data = {
          msg: "Hello f8"
     }
     return (
          <ProviderContext.Provider value={data}>
               {children}
          </ProviderContext.Provider>
     )
}
