import React from 'react'

export default function CommentList({ posts }) {
     return (
          <div className='py-3'>
               <h3>bình luận</h3>

               {posts.map(post => (
                    <div className='mb-3'>
                         <h3>{post.name}</h3>
                         <p>{post.content}</p>
                    </div>
               ))}

          </div>
     )
}
