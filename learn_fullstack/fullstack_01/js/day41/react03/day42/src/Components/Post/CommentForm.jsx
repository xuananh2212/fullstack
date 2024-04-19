
import { useState } from 'react'

export default function CommentForm({ setPosts, posts, setAmout }) {
     const [name, setName] = useState("");
     const [content, setConent] = useState("");
     const handleChangeName = (e) => {
          setName(e.target.value);
     }
     const handleChangeContent = (e) => {
          setConent(e.target.value);
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          const blog = { name, content };
          setPosts([...posts, blog]);
          setName("");
          setConent("");
          setAmout(posts.length + 1);
     }
     return (
          <form onSubmit={handleSubmit}>
               <div className='mb-3'>
                    <input
                         type="text"
                         className='form-control'
                         placeholder='Ten ....'
                         value={name}
                         onChange={handleChangeName}
                    />
               </div>
               <div className='mb-3'>
                    <textarea
                         type="text"
                         className='form-control'
                         placeholder='noi dung ...'
                         value={content}
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
