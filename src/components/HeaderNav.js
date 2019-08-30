import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderNav extends React.Component {
    render() {
        const theme = this.props.dark ? "dark" : "light";
        return (
            <div>
                <Navbar bg={theme} variant={theme} expand='lg'>
                    <Navbar.Brand href='/'>Web Dev Cheatsheet</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/HTML'>HTML</Nav.Link>
                            <Nav.Link href='/CSS'>CSS</Nav.Link>
                            <Nav.Link href='/JS'>JavaScript</Nav.Link>
                            <Nav.Link href='/node'>Node</Nav.Link>
                            <Nav.Link href='/react'>React</Nav.Link>
                            <Nav.Link href='/back-end'>Back-end</Nav.Link>
                            <Nav.Link href='/deployment'>Deployment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HeaderNav;
