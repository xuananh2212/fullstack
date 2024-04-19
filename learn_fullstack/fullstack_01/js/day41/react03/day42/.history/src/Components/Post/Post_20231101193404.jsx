import React from 'react'
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { useState } from 'react';
export default function Post() {
     const [posts, setPosts] = useState([]);
     return (
          <div className='conntainer py-3'>
               <h2>Thông Tin Bài viết</h2>
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                    inventore doloremque quos qui ad, veritatis vel temporibus, deserunt sint suscipit illum quaerat harum.
                    Tenetur doloribus laboriosam voluptatibus eos dignissimos sunt!
               </p>
               <CommentList posts={posts} />
               <CommentForm setPosts={setPosts} posts={posts} />
          </div>
     )
}
