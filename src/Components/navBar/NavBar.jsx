import React from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { NavbarToggler } from 'reactstrap';
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
    return (
<>
    <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">
                <h1>Tienda Virutal</h1>
            </NavbarBrand>
            <Nav>
                <NavLink className='btn btn-outline-primary m-2' to='/'>
                    Home
                </NavLink>
                <NavLink className='btn btn-outline-primary m-2' to='/categoria/PS4'>
                    Play Station 4
                </NavLink>
                <NavLink className='btn btn-outline-primary m-2' to='/categoria/XBOX'>
                    Xbox
                </NavLink>
                <NavLink className='btn btn-outline-primary m-2' to='/categoria/Nintendo'>
                    Nintendo
                </NavLink>
            </Nav>
        
            <Link to='/cart'>
                <CartWidget />
            </Link>
    </Navbar>
</>
    )
}

export default NavBar