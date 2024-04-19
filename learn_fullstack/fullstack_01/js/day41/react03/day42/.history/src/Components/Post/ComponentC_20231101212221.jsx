import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function ComponentC() {
     const context = useContext(AppContext);
     console.log(context);
     return (
          <>
               <div>ComponentC</div>
               <button onClick={context.handleUpdateTitle("hello F8")}>click me</button>
          </>

     )
}
