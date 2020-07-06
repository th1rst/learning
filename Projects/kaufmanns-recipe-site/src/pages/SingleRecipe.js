import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";

export default class SingleRecipe extends Component {
  static contextType = RecipesContext;
  constructor(props) {
      super(props);
  }
 

  render() {
    const { recipes } = this.context;
    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="recipe-list-container">
        <h1> hello from single recipe! input slug is {this.props.match.params.slug}</h1>
        {recipes.map((recipe) => {            
          if (recipe.slug === this.props.match.params.slug) {
            return (
              <div key={Math.random() * 10000}>
                <p>name: {recipe.name}</p>
                <p>subtext: {recipe.subtext}</p>
                <p>about dish: {recipe.aboutDishInfo}</p>
                <p>category: {recipe.dish_category}</p>



                <p>ingredients1:</p>
                <ul>
                  {recipe.ingredients1.map((item) => {
                    return <li key={Math.random() * 10000}>{item}</li>;
                  })}
                </ul>



                <p>ingredients2:</p>
                {recipe.ingredients2 ? (
                  <ul>
                    {recipe.ingredients2.map((item) => {
                      return <li key={Math.random() * 10000}>{item}</li>;
                    })}
                  </ul>
                ) : (
                  "no ingredients2 available"
                )}



                <p>ingredients3:</p>
                {recipe.ingredients3 ? (
                  <ul>
                    {recipe.ingredients3.map((item) => {
                      return <li key={Math.random() * 10000}>{item}</li>;
                    })}
                  </ul>
                ) : (
                  "no ingredients3 available"
                )}


                <p>text: {recipe.preparation}</p>
                <p>time: {recipe.timeNeeded}</p>
                <p>difficulty:{recipe.difficulty}</p>
                <p>servings: {recipe.servings}</p>
                <p>slug: {recipe.slug}</p>
                <p>id: {recipe.id}</p>
                <p>image url's: {recipe.images[0]}</p>
                <p>extra time: {recipe.cookingTime ? `${recipe.cookingTime}` : "No Extra Cooking Time"}</p>
              </div>
            );
          }
        })}
        </div>
      </div>
    );
  }
}
