import React, { createContext, useReducer } from 'react'
import { rootReducer } from './rootReducer';
export const ProviderContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
     console.log(children);
     const [state, dispatch] = useReducer(rootReducer, {
          count: 0
     })
     const data = {
          msg: "Hello f8"
     }
     return (
          <ProviderContext.Provider value={data}>
               {children}
          </ProviderContext.Provider>
     )
}
