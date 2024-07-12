import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function SideBar({className}) {
  return (
    <div className={` border-r-gray-700 border-r-2 bg-transparent resize-x ${className}`}>
      <Navbar />
      <Search className="bg-transparent border-b-2 mb-2"/>
      <Chats />
    </div>
  )
}

export default SideBar
