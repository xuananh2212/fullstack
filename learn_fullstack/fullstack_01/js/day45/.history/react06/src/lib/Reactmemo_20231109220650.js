import React from 'react'

export default function Reactmemo(component) {
     const propOld = null;
     return function MyMeMo(props) {
          if (propOld === null) {
               return <component {...props}></component>
          }

     }
}
