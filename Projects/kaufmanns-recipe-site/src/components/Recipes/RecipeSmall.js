import React, { Component } from "react";
import { BsClockHistory } from "react-icons/bs";
import { GiSpoon, GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default class RecipeSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      preparation: this.props.preparation,
      images: this.props.images,
      timeNeeded: this.props.timeNeeded,
      difficulty: this.props.difficulty,
      servings: this.props.servings,
      slug: this.props.slug,
      cookingTime: this.props.cookingTime,
    };
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

  render() {
    return (
      <Link
        to={`/rezepte/${this.props.slug}`}
        style={{ textDecoration: "none" }}
      >
        <div className="recipe-small-container">
          <div className="recipe-small-column-1">
            {!this.state.images[0] ? (
              <Loading />
            ) : (
              <img
                className="recipe-small-image"
                src={`https:${this.state.images[0]}`}
                alt={`${this.state.slug}`}
              ></img>
            )}
          </div>
          <div className="recipe-small-column-2">
            <div className="recipe-small-row-1">
              <p className="recipe-small-heading">{this.state.name}</p>
            </div>

            <div className="recipe-small-row-2">
              <p className="recipe-small-text">
                {this.state.preparation} ...mehr
              </p>
            </div>

            <div className="recipe-small-row-3">
              <div className="row-inner-container">
                <BsClockHistory className="recipe-icon-small" />
                <p className="recipe-subheading-small">Zeit: </p>
                <p className="recipe-subheading-small">
                  {this.getDuration(this.state.timeNeeded)}
                  {this.state.cookingTime
                    ? ` + ${this.getDuration(this.state.cookingTime)}`
                    : null}
                </p>
              </div>
              <div className="row-inner-container">
                <GiSpoon className="recipe-icon-small" />
                <p className="recipe-subheading-small">Schwierigkeit: </p>
                <p className="recipe-subheading-small">
                  {this.state.difficulty} von 4
                </p>
              </div>
              <div className="row-inner-container">
                <GiKnifeFork className="recipe-icon-small" />
                <p className="recipe-subheading-small">Portionen: </p>
                <p className="recipe-subheading-small">{this.state.servings}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
