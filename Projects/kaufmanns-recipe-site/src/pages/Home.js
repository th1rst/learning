import React, { Component } from "react";
import Navigation from "../components/Navigation";
import RecipeMedium from "../components/Recipes/RecipeMedium";
import { RecipesContext } from "../context";
import BackgroundImage from "../components/BackgroundImage";
import RecipeTiny from "../components/Recipes/RecipeTiny";
import { GiSevenPointedStar } from "react-icons/gi";
import Footer from "../components/Footer"

export default class Home extends Component {
  static contextType = RecipesContext;

  render() {
    const { recipes } = this.context;
    let random = Math.floor(Math.random() * recipes.length)
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




            <div className="home-column">
              <div className="home-column-heading">
                <p>Auf die Schnelle (Rezepte unter 20 Min.)</p>
              </div>
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




            <div className="home-column">
              <div className="home-column-heading">
                <p>Fit für den Sommer</p>
              </div>
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




            <div className="home-column">
              <div className="home-column-heading">
                <p>Kleine Sünden</p>
              </div>
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
            <GiSevenPointedStar className="ebook-icon" />
          </div>

          <div className="recipe-highlight-container"></div>
          
        </div>
        <Footer />
      </div>
    );
  }
}
