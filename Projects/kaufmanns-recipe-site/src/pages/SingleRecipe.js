import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import { GiSpoon, GiKnifeFork } from "react-icons/gi";
import { BsClockHistory, BsInfoCircle } from "react-icons/bs";

export default class SingleRecipe extends Component {
  static contextType = RecipesContext;
  constructor(props) {
    super(props);
  }

  getDuration(minutes) {
    if (minutes < 60) {
      return `${minutes} Minuten`;
    } else if (Math.floor(minutes / 60) === 1) {
      return "1 Stunde";
    } else {
      return `${Math.floor(minutes / 60)} Stunden`;
    }
  }

  displayDifficulty(difficulty) {
    switch (difficulty) {
      case "1":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
          </div>
        );
        break;
      case "2":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
          </div>
        );
        break;
      case "3":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
          </div>
        );
        break;
      case "4":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
          </div>
        );
        break;
    }
  }

  render() {
    const { recipes } = this.context;
    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="single-recipe-container">
          {recipes.map((recipe) => {
            if (recipe.slug === this.props.match.params.slug) {
              return (
                <div key={Math.random() * 10000}>
                  <div className="single-recipe-heading-row">
                    <p className="single-recipe-heading">{recipe.name}</p>
                    {recipe.subtext ? (
                      <p className="single-recipe-subheading">
                        {recipe.subtext}
                      </p>
                    ) : null}
                    <div className="divider-large"></div>

                    <div className="single-recipe-properties-container">
                      <div className="properties-inner-container">
                        <p className="properties-text">Portionen:</p>
                        <GiKnifeFork className="single-recipe-icon" />
                        {recipe.servings === 1 ? (
                          <p className="properties-text">
                            {recipe.servings} Portion
                          </p>
                        ) : (
                          <p className="properties-text">
                            {recipe.servings} Portionen
                          </p>
                        )}
                      </div>
                      <div className="properties-inner-container">
                        <p className="properties-text">Zeit:</p>
                        <BsClockHistory className="single-recipe-icon" />
                        <p className="properties-text">{this.getDuration(recipe.timeNeeded)}</p>
                          {recipe.cookingTime ? <p className="properties-text-small">+ {this.getDuration(recipe.cookingTime)} extra</p>
                      : null}
                        
                      </div>
                      <div className="properties-inner-container">
                        <p className="properties-text">Schwierigkeit:</p>
                        <div className="single-recipe-difficulty-container">
                          {this.displayDifficulty(recipe.difficulty)}
                        </div>

                        <p className="properties-text">
                          {recipe.difficulty} von 4
                        </p>
                      </div>
                    </div>

                    <div className="divider-large"></div>
                  </div>

                  {recipe.aboutDishInfo ? (
                    <div className="about-dish-container">
                      <BsInfoCircle className="info-icon" />
                      <div className="about-dish-container-inner">
                        <p>{recipe.aboutDishInfo}</p>
                      </div>
                    </div>
                  ) : null}

                  <p>ingredients1:</p>
                  <ul>
                    {recipe.ingredients1.map((item) => {
                      return <li key={Math.random() * 10000}>{item}</li>;
                    })}
                  </ul>

                  {/* ingredients 2 and 3 are not "required" so they can be empty*/}
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

                  <p>slug: {recipe.slug}</p>
                  <p>id: {recipe.id}</p>
                  <p>image url's: {recipe.images[0]}</p>
                  <p>
                    extra time:{" "}
                    {recipe.cookingTime
                      ? `${recipe.cookingTime}`
                      : "No Extra Cooking Time"}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
