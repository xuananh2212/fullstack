import React from 'react'
import CommentForm from './CommentForm';
import CommentList from './CommentList';
export default function Post() {
     return (
          <div className='conntainer py-3'>
               <h2>Thông Tin Bài viết</h2>
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                    inventore doloremque quos qui ad, veritatis vel temporibus, deserunt sint suscipit illum quaerat harum.
                    Tenetur doloribus laboriosam voluptatibus eos dignissimos sunt!
               </p>
               <CommentList />
               <CommentForm />
          </div>
     )
}
