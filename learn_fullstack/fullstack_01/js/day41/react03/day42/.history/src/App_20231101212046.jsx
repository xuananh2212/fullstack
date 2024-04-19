import React, { useState } from 'react'
import ComponentA from './Components/Post/ComponentA'
import ComponentB from './Components/Post/ComponentB'
export const AppContext = React.createContext();
console.log(AppContext);
export default function App() {
     const [title, setTitle] = useState("");
     const data = {
          name: "tuan anh",
          email: "tuananh@gmail.com",
          title: ""
     }
     const handleUpdateTitle = (value) => {
          setTitle(value)
     }
     return (
          <AppContext.Provider value={data, handleUpdateTitle}>
               <ComponentA />
               <ComponentB />
          </AppContext.Provider>
     )
}
