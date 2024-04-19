import React from 'react'

export default function Reactmemo(Component) {
     const propOld = null;
     return function MyMeMo(props) {
          if (propOld === null) {
               return <Component {...props}></Component>
          } else {
               let flag = true;
               Object.keys(props).forEach(key => {
                    if (propOld[key] !== props[key]) {
                         flag = false;
                    }
               })
               if (!flag) {
                    return <Component {...props}></Component>
               }

          }

     }
}
