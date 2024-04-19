import React, { createContext } from 'react'
const ProviderContext = createContext();
export default function Provider({ children }) {
     const data = {
          msg: "Hello f8"
     }
     return (
          <ProviderContext.Provider value={data}>
               children
          </ProviderContext.Provider>
     )
}
