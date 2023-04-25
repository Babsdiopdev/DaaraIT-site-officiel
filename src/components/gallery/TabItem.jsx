import React from 'react'
import './tabItem.css'

const TabItem = ({tab,currentTab, changeDisplayedImages}) => {
    const {text, tab:textTab} = tab
  return (
    <li 
    onClick={() => changeDisplayedImages(textTab)}
    style={currentTab.toLowerCase() === textTab.toLowerCase() ? {backgroundColor: "#000", color: '#fff' }: {backgroundColor: 'initial', color:"initial"} }
     className={`bg-white rounded-0 shadow-lg text-sm p-1 px-4 md:p-2 md:px-6  md:text-md tabItem `}
     >
        {text}
    </li>
  )
}

export default TabItem