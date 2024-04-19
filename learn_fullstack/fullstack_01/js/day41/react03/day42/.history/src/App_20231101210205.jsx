import React from 'react'
import ComponentA from './Components/Post/ComponentA'
import ComponentB from './Components/Post/ComponentB'
export const AppContext = React.createContext();
export default function App() {
     const data = {
          name: "tuan anh",
          email: "tuananh@gmail.com"
     }
     return (
          <AppContext.Provider value={data}>
               <ComponentA />
               <ComponentB />
          </AppContext.Provider>
     )
}
