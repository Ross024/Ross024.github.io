import { NavHashLink } from 'react-router-hash-link';

export default function LinkItem({ setMenuOpen, linkLocation, linkName }) {
  return (
    <li onClick={()=>setMenuOpen(false)}><NavHashLink to={"/#" + (linkLocation)}>{linkName}</NavHashLink></li>
  )
}
