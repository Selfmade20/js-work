import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: #222
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: orange;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Selfmade20</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="https://selfmade20.github.io/blog">Blogs</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://github.com/Selfmade20?tab=repositories">Repositories</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)