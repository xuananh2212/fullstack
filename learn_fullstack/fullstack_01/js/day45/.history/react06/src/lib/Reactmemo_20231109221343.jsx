import React from 'react'

export default function Reactmemo(Component) {
     let propOld = null;
     return function MyMeMo(props) {
          if (propOld === null) {
               propOld = props;
               return <Component {...props}></Component>
          } else {
               let flag = true;
               Object.keys(props).forEach(key => {
                    if (propOld[key] !== props[key]) {
                         flag = false;
                    }
               })
               if (!flag) {
                    propOld = props;
                    return <Component {...props}></Component>
               }

          }

     }
}
