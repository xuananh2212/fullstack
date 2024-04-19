//import React from 'react'
import Footer from "./Component/Footer"
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
               <Footer><h3>Tuan Anh Bg</h3></Footer>
          </>

     )
}
