import React, { Component } from 'react'
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';

class BootstrapNavbar extends Component {
    render() {
        return (
            <Navbar fixed="top" bg="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Form inline>
                <FormControl style={{width: "50vw"}}type="text" placeholder="Search GIF's" className="mr-sm-3 mr-4" aria-label="large" />
                <Button className="search-button" variant="outline-info">Search</Button>
              </Form>
          </Navbar>
        )
    }
}

export default BootstrapNavbar


/* 
BG COLOR für CSS: #282c34 
*/