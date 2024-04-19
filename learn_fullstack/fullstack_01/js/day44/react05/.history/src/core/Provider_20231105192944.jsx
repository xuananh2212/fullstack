import React, { createContext } from 'react'
export const ProviderContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
     console.log(children);
     const data = {
          msg: "Hello f8"
     }
     return (
          <ProviderContext.Provider value={data}>
               {children}
          </ProviderContext.Provider>
     )
}
