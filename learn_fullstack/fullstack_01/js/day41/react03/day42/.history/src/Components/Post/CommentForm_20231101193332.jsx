import React from 'react'
import { useState } from 'react'

export default function CommentForm({ setPosts }) {
     const [name, setName] = useState("");
     const [content, setConent] = useState("");
     const handleChangeName = (e) => {
          setName(e.target.value);
     }
     const handleChangeContent = (e) => {
          setConent(e.target.value);
     }
     const handleSubmit = (e) => {

     }
     return (
          <form onSubmit={handleSubmit}>
               <div className='mb-3'>
                    <input
                         type="text"
                         className='form-control'
                         placeholder='Ten ....'
                         onChange={handleChangeName}
                    />
               </div>
               <div className='mb-3'>
                    <textarea
                         type="text"
                         className='form-control'
                         placeholder='noi dung ...'
                         onChange={handleChangeContent}
                    />
               </div>
               <div className='text-end'>
                    <button
                         type='submit'
                         className='btn btn-primary'
                    >Binh luan</button>
               </div>
          </form>
     )
}
