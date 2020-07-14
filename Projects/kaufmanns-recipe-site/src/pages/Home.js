import React, { Component } from "react";
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation";
import RecipeMedium from "../components/Recipes/RecipeMedium";
import { RecipesContext } from "../context";
import BackgroundImage from "../components/BackgroundImage";
import RecipeTiny from "../components/Recipes/RecipeTiny";
import Footer from "../components/Footer";
import { BsDownload } from "react-icons/bs"
import { Carousel } from "react-bootstrap"

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
          <p className="featured-recipes-heading">Die PDF-Version des Buchs mit 237 Seiten zum kostenlosen Download</p>
          <Link to={""}>
          <div className="ebook-container">
          <img className="ebook-cover" src={require("../images/Buchcover.png")} />
          <BsDownload className="download-icon" />
          <p className="download-text">DOWNLOAD</p>
          </div>
          </Link>
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
              <p className="featured-recipes-heading">Beliebte Artikel</p>
              <div className="divider-small"></div>
              <div className="article-container">
                {recipes.map((recipe) => {
                  if (recipe.article) {
                    return (
                      <Link style={{color: "black", textAlign: "left"}}to={`/artikel/${recipe.slug}`}><p>{recipe.name}</p></Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
