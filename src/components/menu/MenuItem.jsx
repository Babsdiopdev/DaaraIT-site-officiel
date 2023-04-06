import React from 'react'
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap'

const MenuItem = ({menuItem}) => {
    const {to, label} = menuItem
  return (
    <li 
    className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"
    >
        <NavLink to={to}>
            {label}
        </NavLink>
    </li>
  )
}

export default MenuItem