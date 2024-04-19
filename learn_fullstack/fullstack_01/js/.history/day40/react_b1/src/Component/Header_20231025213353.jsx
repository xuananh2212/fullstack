//import React from 'react'
import Menu from './Menu'

export default function Header({ title, email, name }) {
     const menu = [
          { id: 1, link: "#", title: "MENU1" },
          { id: 2, link: "#", title: "MENU2" },
          { id: 3, link: "#", title: "MENU3" },
          { id: 4, link: "#", title: "MENU4" }
     ]
     return (
          <>
               <h1>{title}</h1>
               <div>Header</div>
               <h2>{email}</h2>
               <h2>{name}</h2>
               <Menu menu={menu} />
          </>
     )
}
