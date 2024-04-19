import React from 'react'

export default function CommentForm() {
     return (
          <form>
               <div className='mb-3'>
                    <input type="text" className='form-control' placeholder='Ten ....' />
               </div>
               <div className='mb-3'>
                    <textarea type="text" className='form-control' placeholder='noi dung ...' />
               </div>
               <div className='text-end'>
                    <button type='submit' className='btn btn-primary'>Binh luan</button>
               </div>
          </form>
     )
}
