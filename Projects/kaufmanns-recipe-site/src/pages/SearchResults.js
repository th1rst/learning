import React, { Component } from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import { RecipesContext } from "../context";
import RecipeSmall from "../components/Recipes/RecipeSmall";
import Footer from "../components/Footer"

export default class SearchResults extends Component {
  static contextType = RecipesContext;

  render() {
    const { recipes } = this.context;
    const searchQuery = this.props.match.params.slug.toLowerCase();

    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="recipe-list-container">
          <div className="recipe-list-heading-row">
            <p className="recipe-list-heading">
              Suchergebnisse für "{this.props.match.params.slug}"
            </p>
          </div>
          <div className="divider-small"></div>
          {recipes.map((recipe) => {
            if (recipe.name.toLowerCase().includes(searchQuery) && !recipe.article) {
              return (
                <div className="recipe-list-entry">
                  <RecipeSmall
                    name={recipe.name}
                    preparation={recipe.preparation.substr(0, 400)}
                    images={recipe.images.map((image) => image)}
                    timeNeeded={recipe.timeNeeded}
                    difficulty={recipe.difficulty}
                    servings={recipe.servings}
                    cookingTime={recipe.cookingTime}
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
