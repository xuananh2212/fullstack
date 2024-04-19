import React, { useState } from 'react'
import { useSelector } from '../core/useSelector';
export default function Chat() {
     const { dispatch, state } = useSelector();
     const [message, setMesage] = useState("");
     const handleChange = (e) => {
          setMesage(e.target.value)
     }
     const handleSubmit = () => {
          const array = JSON.parse(JSON.stringify(state.message));
          array.push(message);
          dispatch({ type: "message/add", payLoad: array })
     }
     return (
          <div className='my-3'>
               <div className="message">
                    <div className='mb-3'>Tin nhắn 1</div>
                    <div className='mb-3'>Tin nhắn 2</div>
                    <div className='mb-3'>Tin nhắn 3</div>
                    <div className='mb-3'>Tin nhắn 4</div>
                    <form action="" onSubmit={handleSubmit}>
                         <input
                              type="text"
                              className='form-control'
                              placeholder='Tin nhắn....'
                              onChange={handleChange}
                         />
                         <button className='btn btn-primary'>gửi</button>
                    </form>
               </div>
          </div>
     )
}
