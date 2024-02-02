import React from "react";
import { Navbar, Nav, Form, FormControl,InputGroup,Button } from 'react-bootstrap';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../Assets/images/logo/logo.webp'
import '../Assets/css/header.css'
const IconWithCount = ({ icon, count }) => (
    <div className="icon-with-count">
        <div className="icons">
            {icon}
            {count > 0 && <sup>{count}</sup>}
        </div>
    </div>
);

const Header = () => {
    return(
        <>
            <Navbar expand="lg" className="navbar-expand-lg-with-padding bg-lighter">
            <Navbar.Brand href="#home"><img src={Logo} alt='logo' className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navPad-50">
                    <Nav.Link href="#">NEW ARRIVALS</Nav.Link>
                    <Nav.Link href="#">MEN</Nav.Link>
                    <Nav.Link href="#">WINTER COLLECTION</Nav.Link>
                    <Nav.Link href="#">SHOP BY MERCH</Nav.Link>
                    <Nav.Link href="#">UNISEX</Nav.Link>
                </Nav>
                <Form inline>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </Form>
                <Nav className="ml-auto">
                    <IconWithCount icon={<FaUser />} count={0} />
                    <IconWithCount icon={<FaHeart />} count={0} />
                    <IconWithCount icon={<FaShoppingCart />} count={1} />
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}   

export default Header