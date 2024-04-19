import React from 'react'
import ComponentA from './Components/Post/ComponentA'
import ComponentB from './Components/Post/ComponentB'
export const AppContext = React.createContext();
export default function App() {
     return (
          <div>
               <ComponentA />
               <ComponentB />
          </div>
     )
}
