import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import RecipeTiny from "../components/Recipes/RecipeTiny";
import { GiSpoon, GiKnifeFork, GiCookingPot } from "react-icons/gi";
import { BsClockHistory, BsInfoCircle } from "react-icons/bs";
import SocialShare from "../components/SocialShare";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SingleRecipe extends Component {
  static contextType = RecipesContext;

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
      case "2":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
          </div>
        );
      case "3":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon-greyed-out" />
          </div>
        );
      case "4":
        return (
          <div>
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
            <GiSpoon className="single-recipe-icon" />
          </div>
        );
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
              const currentCategory = recipe.dish_category; //relevant for "similar recipes"
              const currentName = recipe.name; //relevant for "similar recipes", exclude current one from display
              let similarRecipeCount = 0; // initial counter for "similar recipes", limit can be set in function

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
                        <p className="properties-text">
                          {this.getDuration(recipe.timeNeeded)}
                        </p>
                        {recipe.cookingTime ? (
                          <p className="properties-text-small">
                            + {this.getDuration(recipe.cookingTime)} extra
                          </p>
                        ) : null}
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

                    <div className="carousel-container">
                      {/* check if theres more than 1 image. if yes: Carousel. If no: single image. */}
                      {recipe.images.length > 1 ? (
                        <Carousel>
                          {recipe.images.map((image) => {
                            return (
                              <Carousel.Item>
                                <img
                                  className="d-block w-100 carousel-image"
                                  src={image}
                                  alt={image}
                                />
                              </Carousel.Item>
                            );
                          })}
                        </Carousel>
                      ) : (
                        <img
                          className="d-block w-100 carousel-image"
                          src={recipe.images[0]}
                          alt={recipe.images[0]}
                        />
                      )}
                    </div>
                    <SocialShare />
                    <div className="divider-large"></div>
                  </div>

                  {recipe.aboutDishInfo ? (
                    <div className="about-dish-container">
                      <BsInfoCircle className="info-icon" />
                      <div className="about-dish-container-inner">
                        {/* render \n line breaks from API correctly */}
                        {recipe.aboutDishInfo.split("\n").map((i, key) => {
                          return <p key={key}>{i}</p>;
                        })}
                      </div>
                    </div>
                  ) : null}
                  <div className="preparation-ingredients-similiar-recipes">
                    <div className="ingredients-preparation-container">
                      <div className="ingredients-main-container">
                        <div className="ingredients-inner-container">
                            <p className="ingredients-heading">
                              {recipe.ingredients1[0]}:
                            </p>
                          <ul>
                            {/* first item is always the heading, so skip it */}
                            {recipe.ingredients1.slice(1).map((item) => {
                              return (
                                <li key={Math.random() * 10000}>{item}</li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* ingredients 2 and 3 are not "required" so they can be empty*/}
                        {recipe.ingredients2 ? (
                          <div className="ingredients-inner-container">
                            <p className="ingredients-heading">
                              {recipe.ingredients2[0]}:
                            </p>
                            <ul>
                              {recipe.ingredients2.slice(1).map((item) => {
                                return (
                                  <li key={Math.random() * 10000}>{item}</li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}

                        {recipe.ingredients3 ? (
                          <div className="ingredients-inner-container">
                            <p className="ingredients-heading">
                              {recipe.ingredients3[0]}:
                            </p>
                            <ul>
                              {recipe.ingredients3.slice(1).map((item) => {
                                return (
                                  <li key={Math.random() * 10000}>{item}</li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}
                      </div>

                      <div className="preparation-container">
                        <div className="preparation-heading-container">
                          <div className="preparation-icon-circle-behind">
                            <GiCookingPot className="preparation-icon" />
                          </div>
                          <p className="single-recipe-heading"> Zubereitung</p>
                        </div>
                        {recipe.preparation.split("\n").map((i, key) => {
                          return (
                            <p className="preparation-main-text" key={key}>
                              {i}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="similar-recipes-container">
                      <p className="similar-recipes-heading">
                        Andere Rezepte der Kategorie <br /> 
                        {`"${currentCategory}"`}
                      </p>
                      <div className="divider-small"></div>

                      {recipes.map((recipe) => {
                        if (
                          //check current category, display only same category ones "similar recipes",
                          recipe.dish_category === currentCategory &&
                          //check current dish name, exclude it from recommendations
                          recipe.name !== currentName &&
                          //randomize the selection of recipes a bit
                          (Math.random() * 10) > 6
                        ) {
                          similarRecipeCount++;
                          if (similarRecipeCount < 10) { // set max no. of similar recipes to be displayed
                            return (
                                <RecipeTiny
                                  name={recipe.name}
                                  images={recipe.images.map((image) => image)}
                                  dish_category={recipe.dish_category}
                                  slug={recipe.slug}
                                  key={recipe.slug}
                                />
                            );
                          }
                        }
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
