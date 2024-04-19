import React from 'react'

export default function Reactmemo(component) {
     const propOld = null;
     return function MyMeMo(props) {
          if (propOld === null) {
               return <component {...props}></component>
          } else {
               let flag = true;
               Object.keys(props).forEach(key => {
                    if (propOld[key] !== props[key]) {
                         flag = false;
                    }
               })
               if (!flag) {
                    return <component {...props}></component>
               }

          }

     }
}
