import React from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
<>
    <Navbar bg="light" expand="lg">
        <Container>
            <NavbarBrand className='brand-container' href="/">
                <img src="./logo-tienda.png" className='logo' alt="" />
                <h1>GamerZone</h1>
            </NavbarBrand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                    <NavLink className='btn btn-dark m-2' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='btn btn-outline-primary m-2' to='/categoria/PS4'>
                        Play Station 4
                    </NavLink>
                    <NavLink className='btn btn-outline-success m-2' to='/categoria/XBOX'>
                        Xbox
                    </NavLink>
                    <NavLink className='btn btn-outline-danger m-2' to='/categoria/Nintendo'>
                        Nintendo
                    </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Link to='/cart'>
                <CartWidget />
        </Link>
    </Navbar>
</>
    )
}

export default NavBar