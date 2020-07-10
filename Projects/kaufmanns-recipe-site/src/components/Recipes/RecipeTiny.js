import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default class RecipeTiny extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      images: this.props.images,
      slug: this.props.slug,
    };
  }

  render() {
    return (
      <Link
        to={`/rezepte/${this.props.slug}`}
        style={{ textDecoration: "none" }}
      >
        <div className="recipe-tiny-container">
          <div className="recipe-tiny-row-1">
            {!this.state.images[0] ? (
              <Loading />
            ) : (
              <img
                className="recipe-tiny-image"
                src={`https:${this.state.images[0]}`}
                alt={`${this.state.slug}`}
              ></img>
            )}
          </div>
          <div className="recipe-tiny-row-2">
            <p className="recipe-tiny-heading">{this.state.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}
