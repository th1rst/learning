import React, { Component } from "react";

export default class RecipeSmall extends Component {
  render() {
    return (
      <div className="recipe-small-container">
        <div className="recipe-small-column-1">
          <img
            className="recipe-small-image"
            src="https://images.ctfassets.net/9eq7letzz02f/6FXvQVmZBK7iEE5WgnvRZN/05f83b6192b5281273f8f51980bc4f73/photo-1509482560494-4126f8225994.jpeg"
          ></img>
        </div>
        <div className="recipe-small-column-2">
          <p>hi</p>
        </div>
      </div>
    );
  }
}
