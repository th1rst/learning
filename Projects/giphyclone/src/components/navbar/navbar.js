import React, { Component } from 'react'
import {Navbar, Form, FormControl, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class BootstrapNavbar extends Component {
    render() {
      const NavStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      } 
      
        return (
            <Navbar fixed="top" bg="dark" style={NavStyle}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Form inline>
                <FormControl style={{width: "40vw"}} type="text" placeholder="Search for GIF's" className="mr-sm-3 mr-4" aria-label="large" />
                <Button className="search-button" variant="outline-info">Search</Button>
              </Form>
          </Navbar>
        )
    }
}

export default BootstrapNavbar