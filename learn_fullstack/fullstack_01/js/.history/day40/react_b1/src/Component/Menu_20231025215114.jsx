import React from 'react'

const handleClick = () => {
     onReceiveData("hello F8");
}
export default function Menu({ menu, onReceiveData }) {
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
