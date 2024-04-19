//import React from 'react'
import Header from "./Component/Header"
export function App() {
     const user = {
          name: "tuananh",
          email: "tuananh@gmail.com"
     }
     return (
          <>
               <Header title="hoc f8 hee" {...user} />
               <div>React không khó</div>
          </>

     )
}
