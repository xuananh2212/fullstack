import React from 'react'

export default function Menu({ menu }) {
     return (
          <div>
               <ul className='menu'>
                    {menu?.length && menu?.map(({ id, link, title }) => (<li key={id}><a href={link}>{title}</a></li>))}
               </ul>
          </div>
     )
}
