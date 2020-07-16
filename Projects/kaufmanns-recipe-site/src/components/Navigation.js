import React, { Component } from "react";
import { RecipesContext } from "../context";
import { NavDropdown, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineAlignLeft } from "react-icons/ai";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      randomSlug: "",
      searchInput: " ",
      slide: 0,
      lastScrollY: 0,
      isOpen: false,
    };
    this.textInput = React.createRef();
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleNavbarExpand = this.handleNavbarExpand.bind(this);
  }

  static contextType = RecipesContext;

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-200px" });
    } else {
      this.setState({ slide: "0px" });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  handleTextChange = async function () {
    let userInput = this.textInput.current.value;
    await this.setState({ searchInput: userInput });
  };

  handleEnterKey(e) {
    if (e.key === "Enter") {
      window.location.href = `/suche/${this.state.searchInput}`;
    }
  }

  handleNavbarExpand() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  getRandomRecipe = () => {
    const { recipes } = this.context;
    let random = recipes[Math.floor(Math.random() * recipes.length)].slug;
    this.setState({ randomSlug: random });
  };

  render() {
    const { recipes } = this.context;
    return (
      <div>
        /* DESKTOP NAVBAR */
        <div
          className="navbar-container"
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: "transform 120ms linear",
          }}
        >
          <Link to={"/"} style={{ zIndex: "5" }}>
            <img
              src={require("../images/logo_small2.png")}
              className="navbar-logo"
              alt="kaufmann-logo"
            />
          </Link>
          <div className="navbar-item navbar-first">
            <FormControl
              type="text"
              placeholder="Suchen..."
              className="sm-2 search-form"
              ref={this.textInput}
              //autoFocus={true}
              onKeyDown={this.handleEnterKey}
              onChange={() => this.handleTextChange()}
            />
            <Link to={`/suche/${this.state.searchInput}`}>
              <FaSearch
                inputRef={(node) => (this.inputNode = node)}
                className="search-icon"
                style={{ width: "30px", height: "45%", margin: "1vw" }}
              />
            </Link>
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
            onMouseDown={this.getRandomRecipe}
            className="navbar-item"
            to={`/rezepte/${this.state.randomSlug}`}
          >
            <div>Zufallsrezept</div>
          </Link>
          <div className="navbar-item">
            <NavDropdown title="Artikel" id="nav-dropdown-artikel">
              {recipes.map((recipe) =>
                recipe.article ? (
                  <NavDropdown.Item as={Link} to={`/artikel/${recipe.slug}`}>
                    {recipe.name}
                  </NavDropdown.Item>
                ) : null
              )}
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



        /* MOBILE NAVBAR */
        
         
          
        
        <div className="mobile-navbar-container" style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: "transform 120ms linear",
          }}>



          <div className="mobile-navbar-heading">
            <AiOutlineAlignLeft className="navbar-expand-icon" onClick={this.handleNavbarExpand}/>
            <Link to={"/"} style={{width: "100%", textDecoration: "none"}}>
            <div className="mobile-logo-container">
              <p className="mobile-logo-heading">Kaufmanns</p>
              <p className="mobile-logo-subheading">Spitzen-Rezeptsammlung</p>
            </div>
            </Link>
          </div>


          <div className={this.state.isOpen ? "mobile-navbar-items-container show" : "mobile-navbar-items-container"}>

          </div>
        </div>


        
      </div>
      
    );
  }
}
