import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer"

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
              <div>
                <div className="heading-container">
                  <div className="heading-column-1">
                    <img className="heading-image" src={recipe.images[0]} alt="article context"/>
                  </div>
                  <div className="heading-column-2">
                    <p className="article-heading">{recipe.name}</p>
                    <p className="article-subheading">{recipe.subtext}</p>
                  </div>
                </div>
                <div className="main-text-container">
                  {recipe.preparation.split("\n").map((i, key) => {
                    return <p key={key}>{i}</p>;
                  })}
                </div>
              </div>
            ) : null
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
