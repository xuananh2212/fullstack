import React from 'react'
import students from '../../students.json';

export default function Students() {
     console.log(students);
     return (
          <> <input type="search" placeholder='Search' />
               <h3>Danh sach sinh vien</h3>
               {
                    students.map(({ id, fullname }) => {
                         <h4 key={id}>{fullname}</h4>
                    })
               }
          </>
     )
}
