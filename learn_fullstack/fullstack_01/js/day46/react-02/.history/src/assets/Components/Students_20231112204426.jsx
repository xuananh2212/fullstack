import React, { useState } from 'react'
import students from '../../students.json';

export default function Students() {
     const [keyword, setKeyword] = useState("");
     const handleSearch = (e) => {
          setKeyword(e.target.value);
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
                    students.map(({ id, fullname }) => {
                         if (keyword.length > 0 && fullname.toLowerCase().includes(keyword.toLowerCase)) {
                              return <h4 key={id} style={{ background: "#ccc" }}>{fullname}</h4>
                         }
                         return <h4 key={id}></h4>

                    })
               }
          </>
     )
}
