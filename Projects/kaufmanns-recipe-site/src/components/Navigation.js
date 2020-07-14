import React, { Component } from "react";
import { RecipesContext } from "../context";
import { NavDropdown, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      randomSlug: "",
      searchInput: " ",
      slide: 0,
      lastScrollY: 0,
    };
    this.textInput = React.createRef();
    this.handleEnterKey = this.handleEnterKey.bind(this);
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
      console.log(this.state.searchInput);
      window.location.href = `/suche/${this.state.searchInput}`;
    }
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
            className="navbar-item"
            to={`/rezepte/${this.state.randomSlug}`}
          >
            <div onMouseDown={this.getRandomRecipe}>Zufallsrezept</div>
          </Link>
          <div className="navbar-item">
            <NavDropdown title="Artikel" id="nav-dropdown-artikel">
              {recipes.map((recipe) => {
                if (recipe.article) {
                  return (
                    <NavDropdown.Item href="#action/3.1">
                      {recipe.name}
                    </NavDropdown.Item>
                  );
                }
              })}
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