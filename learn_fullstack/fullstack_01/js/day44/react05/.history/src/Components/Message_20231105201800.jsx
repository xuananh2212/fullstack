
import React from 'react'
import { useSelector } from '../core/useSelector'
export default function Message() {
     const { state } = useSelector();
     return (
          <div>
               {state.count >= 10 ? <h3>ket qua tot</h3> : <h3>ket qua kh tot</h3>}
          </div>
     )
}
