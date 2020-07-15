import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";

export default class Article extends Component {
  static contextType = RecipesContext;

  render() {
    const { recipes } = this.context;

    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="recipe-list-container">
          {recipes.map((recipe) =>
            recipe.slug === this.props.match.params.slug ? (
              <p>
                {recipe.preparation.split("\n").map((i, key) => {
                  return <p key={key}>{i}</p>;
                })}
              </p>
            ) : null
          )}
        </div>
      </div>
    );
  }
}
