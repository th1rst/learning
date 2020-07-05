import React, { Component } from "react";
import { NavDropdown, FormControl } from "react-bootstrap";
import { BsArrowsCollapse } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {
    mouseOverLogo: false,
  };
  toggleNavIcons = () => {
    this.setState({ mouseOverLogo: !this.state.mouseOverLogo });
  };

  render() {
    return (
      <div>
        <div className="navbar-container">
          <img
            src={require("../images/logo_small2.png")}
            className="navbar-logo"
            alt="kaufmann-logo"
            onMouseEnter={this.toggleNavIcons}
            onMouseLeave={this.toggleNavIcons}
          />
          <MdHome
            className={
              this.state.mouseOverLogo ? "home-icon show" : "home-icon"
            }
          />
          <BsArrowsCollapse
            className={
              this.state.mouseOverLogo ? "collapse-icon show" : "collapse-icon"
            }
          />

          <div className="navbar-item navbar-first">
            <FormControl
              type="text"
              placeholder="Suchen..."
              className="sm-2 search-form"
            />
          </div>
          <div className="navbar-item">
            <NavDropdown title="Kategorien" id="nav-dropdown-kategorien">
              <NavDropdown.Item as={Link} to={"/category/:brot"}>
                Brot
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Besonderes und Beilagen
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Eintöpfe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Fleisch, Fisch, Geflügel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Grillen & BBQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Kuchen, Süßes, Torten
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Liköre, Spezialitäten
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Saucen, Dips
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Slow Cooking
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suppen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/category/alle-rezepte"}>
                Alle Rezepte
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="navbar-item">Zufallsrezept</div>

          <div className="navbar-item">
            <NavDropdown title="Artikel" id="nav-dropdown-artikel">
              <NavDropdown.Item href="#action/3.1">
                Bayerisch für Nichtbayern
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cholesterin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Der Chili-Wettbewerb
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gewürze</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tomatensauce
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div className="navbar-item">
            <NavDropdown title="Über" id="nav-dropdown-artikel">
              <NavDropdown.Item href="#action/3.1">
                Über den Autor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Über die Webseite
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kostenloses Ebook
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="navbar-item">Forum</div>
        </div>
      </div>
    );
  }
}

/* 


               



<Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="#home"><img src={require("../images/logo_small2.png")} class="navbar-logo" alt="kaufmann-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
*/
