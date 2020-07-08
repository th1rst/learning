import React, { Component } from "react";
import { RecipesContext } from "../context";
import { NavDropdown, FormControl } from "react-bootstrap";
import { BsArrowsCollapse } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  static contextType = RecipesContext;
  state = {
    mouseOverLogo: false,
    randomSlug: "",
  };

  toggleNavIcons = () => {
    this.setState({ mouseOverLogo: !this.state.mouseOverLogo });
  };

  getRandomRecipe = () => {
    const { recipes } = this.context;
    let random = recipes[Math.floor(Math.random() * recipes.length)].slug;
    this.setState({ randomSlug: random });
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
              <NavDropdown.Item as={Link} to={"/kategorie/brot"}>
                Brot
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/kategorie/besonderes-und-beilagen"}
              >
                Besonderes und Beilagen
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/eintoepfe"}>
              Eintöpfe
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/kategorie/fleisch-fisch-gefluegel"}
              >
                Fleisch, Fisch, Geflügel
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/grillen-und-bbq"}>
                Grillen & BBQ
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/kategorie/kuchen-suesses-torten"}
              >
                Kuchen, Süßes, Torten
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/kategorie/likoere-spezialitaeten"}
              >
                Liköre, Spezialitäten
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/salate"}>
                Salate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/saucen-und-dips"}>
                Saucen, Dips
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/slow-cooking"}>
                Slow Cooking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kategorie/suppen"}>
                Suppen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/kategorie/alle-rezepte"}>
                Alle Rezepte
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <Link
            className="navbar-item"
            to={`/recipes/${this.state.randomSlug}`}
          >
            <div onMouseDown={this.getRandomRecipe}>Zufallsrezept</div>
          </Link>
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
