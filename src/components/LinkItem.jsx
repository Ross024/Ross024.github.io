import React from 'react'

export default function LinkItem({ setMenuOpen, linkLocation, linkName }) {
  return (
    <li onClick={()=>setMenuOpen(false)}><a href={"#" + (linkLocation)}>{linkName}</a></li>
  )
}
