import React from 'react'


export default function Menu({ menu, onReceiveData }) {
     const handleClick = () => {
          onReceiveData("hello F8");
     }
     return (
          <div>
               <ul className='menu'>
                    {menu?.length && menu?.map(({ id, link, title }) => (<li key={id}><a href={link}>{title}</a></li>))}
               </ul>
               <hr />
               <button onClick={handleClick}>click me</button>
          </div>
     )
}
