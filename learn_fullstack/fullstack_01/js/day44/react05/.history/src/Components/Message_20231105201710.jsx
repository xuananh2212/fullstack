
import React from 'react'
import { useSelector } from '../core/useSelector'
export default function Message() {
     const { state } = useSelector();
     return (
          <div>Message</div>
     )
}
