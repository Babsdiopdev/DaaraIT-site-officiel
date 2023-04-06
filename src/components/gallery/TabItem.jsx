import React from 'react'

const TabItem = ({tab}) => {
    const {text} = tab
  return (
    <li className='bg-white rounded-0 shadow-lg text-sm p-1 px-4 md:p-2 md:px-6  md:text-md '>
        {text}
    </li>
  )
}

export default TabItem