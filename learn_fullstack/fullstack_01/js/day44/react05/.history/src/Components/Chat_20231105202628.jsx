import React from 'react'

export default function Chat() {
     return (
          <div className='my-3'>
               <div className="message">
                    <div className='mb-3'>Tin nhắn 1</div>
                    <div className='mb-3'>Tin nhắn 2</div>
                    <div className='mb-3'>Tin nhắn 3</div>
                    <div className='mb-3'>Tin nhắn 4</div>
                    <form action="">
                         <input
                              type="text"
                              className='form-control'
                              placeholder='Tin nhắn....'
                         />
                         <button className='btn btn-primary'>gửi</button>
                    </form>
               </div>
          </div>
     )
}
