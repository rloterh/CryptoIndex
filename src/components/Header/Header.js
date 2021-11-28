import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <>
    <header>
      <Navbar bg="light" variant="light">
        <Nav.Link as={NavLink} to="/">
          <Button id="back-arrow">
            <i className="fas fa-arrow-left" />
          </Button>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/">
          <Navbar.Brand>Crypto Index</Navbar.Brand>
        </Nav.Link>
        <Button id="menu-settings">
          <i className="fas fa-cog" />
        </Button>
      </Navbar>
    </header>
  </>
);

export default Header;
