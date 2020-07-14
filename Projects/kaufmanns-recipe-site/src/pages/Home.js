import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { RecipesContext } from "../context";
import BackgroundImage from "../components/BackgroundImage";
import RecipeTiny from "../components/Recipes/RecipeTiny";
import Footer from "../components/Footer";
import { BsDownload } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { Carousel, Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  static contextType = RecipesContext;

  render() {
    const { recipes } = this.context;
    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="home-container">
          <div className="home-row-1">
            <div className="home-column-big">
              <div className="home-column-heading">
                <p>HIGHLIGHTS</p>
              </div>
              <div className="divider-small"></div>
              <div className="carousel-container-home">
                <Carousel>
                  {recipes.map((recipe) => {
                    if (recipe.featured) {
                      return (
                        <Carousel.Item>
                          <Link to={`/rezepte/${recipe.slug}`}>
                            <img
                              className="carousel-image-home"
                              src={`https:${recipe.images[0]}`}
                              alt="recipe slide img"
                            />
                            <div className="carousel-properties-heading">
                              <p className="carousel-properties-text">
                                <GiKnifeFork className="carousel-icon" />
                                {recipe.servings} Portionen
                              </p>
                              <p className="carousel-properties-text">
                                <BsClockHistory className="carousel-icon" />{" "}
                                {recipe.timeNeeded} Minuten
                              </p>
                            </div>

                            <Carousel.Caption>
                              <h3 className="carousel-text">{recipe.name}</h3>
                              {recipe.subtext ? (
                                <p className="carousel-subtext">
                                  {recipe.subtext}
                                </p>
                              ) : null}
                            </Carousel.Caption>
                          </Link>
                        </Carousel.Item>
                      );
                    }
                  })}
                </Carousel>
              </div>
            </div>

            <div className="home-column card-container">
              <div className="home-column-heading">
                <p>Magazin</p>
              </div>
              <div className="divider-small"></div>
              <CardGroup>
                {recipes.map((recipe) => {
                  if (recipe.article) {
                    return (
                      <Card>
                        <Card.Img
                          className="card-image"
                          variant="top"
                          src={recipe.images[0]}
                        />
                        <Card.Body>
                          <Link to={`/artikel/${recipe.slug}`}>
                            <Card.Title className="card-heading">
                              {recipe.name}
                            </Card.Title>
                          </Link>
                          <Card.Text className="card-text">
                            {recipe.preparation}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  }
                })}
              </CardGroup>
            </div>

            <div className="home-column">
              <div className="home-column-heading">
                <p>Einfache Rezepte</p>
              </div>
              <div className="divider-small"></div>
              <div className="home-column-row">
                {recipes.map((recipe) => {
                  if (recipe.difficulty === "1") {
                    return (
                      <div className="recipe-list-entry">
                        <RecipeTiny
                          name={recipe.name}
                          images={recipe.images.map((image) => image)}
                          dish_category={recipe.dish_category}
                          slug={recipe.slug}
                          key={recipe.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="divider-medium"></div>

            <div className="home-column">
              <div className="home-column-heading">
                <p>Auf die Schnelle (Rezepte unter 20 Min.)</p>
              </div>
              <div className="divider-small"></div>
              <div className="home-column-row">
                {recipes.map((recipe) => {
                  if (recipe.timeNeeded <= "20" && !recipe.cookingTime) {
                    return (
                      <div className="recipe-list-entry">
                        <RecipeTiny
                          name={recipe.name}
                          images={recipe.images.map((image) => image)}
                          dish_category={recipe.dish_category}
                          slug={recipe.slug}
                          key={recipe.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="divider-medium"></div>
            <div className="home-column">
              <div className="home-column-heading">
                <p>Fit für den Sommer</p>
              </div>
              <div className="divider-small"></div>
              <div className="home-column-row">
                {recipes.map((recipe) => {
                  if (recipe.dish_category === "Salate") {
                    return (
                      <div className="recipe-list-entry">
                        <RecipeTiny
                          name={recipe.name}
                          images={recipe.images.map((image) => image)}
                          dish_category={recipe.dish_category}
                          slug={recipe.slug}
                          key={recipe.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="divider-medium"></div>
            <div className="home-column">
              <div className="home-column-heading">
                <p>Kleine Sünden</p>
              </div>
              <div className="divider-small"></div>
              <div className="home-column-row">
                {recipes.map((recipe) => {
                  if (recipe.dish_category === "Kuchen, Süßes, Torten") {
                    return (
                      <div className="recipe-list-entry">
                        <RecipeTiny
                          name={recipe.name}
                          images={recipe.images.map((image) => image)}
                          dish_category={recipe.dish_category}
                          slug={recipe.slug}
                          key={recipe.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <div className="home-row-2">
            <div className="featured-recipes-container">
              <p className="featured-recipes-heading">
                Die PDF-Version des Buchs mit 237 Seiten zum kostenlosen
                Download
              </p>
              <Link to={""}>
                {" "}
                {/* INSERT EBOOK PDF PATH HERE */}
                <div className="ebook-container">
                  <img
                    className="ebook-cover"
                    src={require("../images/Buchcover.png")}
                  />
                  <BsDownload className="download-icon" />
                  <p className="download-text">DOWNLOAD</p>
                </div>
              </Link>

              <p className="featured-recipes-heading">Beliebte Artikel</p>
              <div className="divider-small"></div>
              <div className="article-container">
                {recipes.map((recipe) => {
                  if (recipe.article) {
                    return (
                      <Link
                        style={{ color: "black", textAlign: "left" }}
                        to={`/artikel/${recipe.slug}`}
                      >
                        <p>{recipe.name}</p>
                      </Link>
                    );
                  }
                })}
              </div>

              <p className="featured-recipes-heading">Beliebte Rezepte</p>
              <div className="divider-small"></div>
              {recipes.map((recipe) => {
                if (recipe.featured) {
                  return (
                    <div className="recipe-list-entry">
                      <RecipeTiny
                        name={recipe.name}
                        images={recipe.images.map((image) => image)}
                        dish_category={recipe.dish_category}
                        slug={recipe.slug}
                        key={recipe.slug}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
