import React from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';
import { NavbarToggler } from 'reactstrap';
import CartWidget from './cartWidget/CartWidget';


const NavBar = () => {
    return (
<>
    <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">
                <h1>Tienda Virutal</h1>
            </NavbarBrand>
            <Nav>
                <NavLink href='#'>
                    Home
                </NavLink>
                <NavLink href='#'>
                    Productos
                </NavLink>
                <NavLink href='#'>
                    Contacto
                </NavLink>
            </Nav>
        
            <CartWidget/>
    </Navbar>
</>
    )
}

export default NavBar