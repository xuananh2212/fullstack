import React, { useState, useTransition } from 'react'
import students from '../../students.json';

export default function Students() {
     const [keyword, setKeyword] = useState("");
     const [isPending, startTransition] = useTransition();
     const handleSearch = (e) => {
          startTransition(() => {
               setKeyword(e.target.value);
          })
     }
     console.log(students);
     return (
          <> <input
               type="search"
               placeholder='Search'
               onChange={handleSearch}
               value={keyword}
          />
               <h3>Danh sach sinh vien</h3>
               {
                    isPending ? <h4>Loading</h4> :
                         students.map(({ id, fullName }) => {
                              console.log(id, fullName);
                              if (keyword.length && fullName.toLowerCase().includes(keyword.toLowerCase())) {
                                   return <h4 key={id} style={{ background: "#ccc" }}>{fullName}</h4>
                              }
                              return (<h4 key={id}>{fullName}</h4>)

                         })
               }

          </>
     )
}
