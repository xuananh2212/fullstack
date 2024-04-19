import React from 'react'

export default function Reactmemo(Component) {
     let propOld = null;
     return function MyMeMo(props) {
          console.log(props);
          if (propOld === null) {
               console.log(1);
               propOld = props;
               return <Component {...props} />
          } else {
               let flag = true;
               Object.keys(props).forEach(key => {
                    if (propOld[key] !== props[key]) {
                         flag = false;
                    }
               })
               if (!flag) {
                    propOld = props;
                    return <Component {...props} />
               }

          }

     }
}
