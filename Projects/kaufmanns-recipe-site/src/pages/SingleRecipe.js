import React, { Component } from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import { GiSpoon, GiKnifeFork, GiCookingPot } from "react-icons/gi";
import { BsClockHistory, BsInfoCircle } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialShare from "../components/SocialShare";

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
                    <SocialShare />
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

                  <div className="ingredients-main-container">
                    <div className="ingredients-inner-container">
                      <p className="ingredients-heading">
                        {recipe.ingredients1[0]}:
                      </p>
                      <ul>
                        {/* first item is always the heading, so skip it */}
                        {recipe.ingredients1.slice(1).map((item) => {
                          return <li key={Math.random() * 10000}>{item}</li>;
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
                            return <li key={Math.random() * 10000}>{item}</li>;
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
                            return <li key={Math.random() * 10000}>{item}</li>;
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
              );
            }
          })}
        </div>
      </div>
    );
  }
}

/* 

                 
           <div className="carousel-container">
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
                  </div>

*/
