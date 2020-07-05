import React, { Component } from "react";
import { BsClockHistory } from "react-icons/bs";
import { GiSpoon, GiKnifeFork } from "react-icons/gi";

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
          <div className="recipe-small-row-1">
            <p className="recipe-small-heading">Apfel-Pfannkuchen</p>
          </div>

          <div className="recipe-small-row-2">
            <p className="recipe-small-text">
              Mehl und Salz mischen. Eigelb vom Eiweiß trennen (Eiweiß
              aufheben). Eigelb mit der Milch verrühren. Diese Zutaten (außer
              dem Eiweiß) zu einem Teig vermischen. Vanille-Aroma zugeben. Das
              Eiweiß mit jeweils einer kleinen Prise Zucker und Salz zu steifem
              Schnee schlagen; Eischnee vorsichtig unter den Teig heben.
            </p>
          </div>

          <div className="recipe-small-row-3">
            <div className="row-inner-container">
              <BsClockHistory className="recipe-icon-small" />
              <p className="recipe-subheading-small">Zeit: </p>
              <p className="recipe-subheading-small">20 Min.</p>
            </div>
            <div className="row-inner-container">
              <GiSpoon className="recipe-icon-small" />
              <p className="recipe-subheading-small">Schwierigkeit: </p>
              <p className="recipe-subheading-small">Leicht</p>
            </div>
            <div className="row-inner-container">
              <GiKnifeFork className="recipe-icon-small" />
              <p className="recipe-subheading-small">Portionen: </p>
              <p className="recipe-subheading-small">3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
