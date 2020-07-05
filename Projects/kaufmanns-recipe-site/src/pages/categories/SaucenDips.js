import React, { Component } from "react";
import { RecipesContext } from "../../context";
import BackgroundImage from "../../components/BackgroundImage";
import Navigation from "../../components/Navigation";
import RecipeSmall from "../../components/Recipes/RecipeSmall";

export default class SaucenDips extends Component {
  static contextType = RecipesContext;
  render() {
    const { recipes } = this.context;

    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="recipe-list-container">
          <div className="recipe-list-heading-row">
            <p className="recipe-list-heading">
              Alle Rezepte der Kategorie "Saucen und Dips":
            </p>
          </div>
          <div className="divider-small"></div>
          {recipes.map((recipe) => {
            if (recipe.dish_category === "Saucen / Dips") {
              return (
                <div className="recipe-list-entry">
                  <RecipeSmall
                    name={recipe.name}
                    preparation={recipe.preparation.substr(0, 400)}
                    images={recipe.images.map((image) => image)}
                    timeNeeded={recipe.timeNeeded}
                    difficulty={recipe.difficulty}
                    servings={recipe.servings}
                    slug={recipe.slug}
                    key={recipe.slug}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
