import React from 'react'
import { AppContext } from '../../App'
export default function ComponentA() {
     return (
          <AppContext.Consumer>
               {
                    (content) => {
                         console.log(content);
                         <div><h1>ComponentA</h1></div>
                    }
               }
          </AppContext.Consumer>
     )
}
