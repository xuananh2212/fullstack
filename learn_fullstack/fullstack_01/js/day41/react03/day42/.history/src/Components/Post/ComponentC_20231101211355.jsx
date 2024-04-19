import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function ComponentC() {
     const context = useContext(AppContext);
     console.log(context);
     return (
          <div>ComponentC</div>
     )
}
