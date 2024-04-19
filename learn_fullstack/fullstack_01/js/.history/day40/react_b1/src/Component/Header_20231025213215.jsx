//import React from 'react'
import Menu from './Menu'

export default function Header({ title, email, name }) {
     return (
          <>
               <h1>{title}</h1>
               <div>Header</div>
               <h2>{email}</h2>
               <h2>{name}</h2>
               <Menu />
          </>
     )
}
