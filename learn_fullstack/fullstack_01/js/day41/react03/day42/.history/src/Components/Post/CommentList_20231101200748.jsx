import React from 'react'

export default function CommentList({ posts }) {
     return (
          <div className='py-3'>
               <h3>bình luận</h3>
               <div className='mb-3'>
                    <h3>Tuan anh</h3>
                    <p>Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit. Cumque sed, obcaecati,
                         earum veritatis minima fugiat ipsam labore itaque non
                         eaque ipsum illum error architecto enim est illo et omnis incidunt.
                    </p>
               </div>
               <div className='mb-3'>
                    <h3>Tuan anh</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Cumque sed, obcaecati, earum veritatis minima fugiat ipsam labore
                         itaque non eaque ipsum illum error architecto enim est illo et omnis incidunt.
                    </p>
               </div>

               {posts.map(post => (
                    <div className='mb-3'>
                         <h3>{post.name}</h3>
                         <p>{post.content}</p>
                    </div>
               ))}

          </div>
     )
}
