import React, { useContext } from 'react';
import { ComponentC } from './ComponentC'

import { AppContext } from '../../App'
export default function ComponentB() {
     const context = useContext(AppContext);
     console.log(context);
     return (
          <div>
               <h1>ComponentB</h1>
               <ComponentC />
          </div>
     )
}
