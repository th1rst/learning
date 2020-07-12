import React, { Component } from "react";
import Navigation from "../components/Navigation"
import BackgroundImage from "../components/BackgroundImage"
import { RecipesContext } from "../context";

export default class SearchResults extends Component {
  static contextType = RecipesContext;

  render() {
    const { recipes } = this.context;
    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="recipe-list-container">
          <div className="recipe-list-heading">
            <h1>Suchergebnisse für "{this.props.match.params.slug}"</h1>
          </div>
        </div>
      </div>
    );
  }
}
