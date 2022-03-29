import React from 'react'
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

export default function Navbar() {
  return (
      <>
      <Nav>
        <NavMenu>
            <NavLink to="/Contacts" activeStyle>
                Contacts
            </NavLink>
            <NavLink to="/Search" activeStyle>
                Search Contacts
            </NavLink>
            <NavLink to="/AddContact" activeStyle>
                Add Contact
            </NavLink>
        </NavMenu>
        </Nav>
    
    </>
  )
}
