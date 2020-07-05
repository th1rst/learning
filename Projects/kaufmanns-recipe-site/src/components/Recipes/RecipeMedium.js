import React, { Component } from "react";
import {BsClockHistory} from "react-icons/bs";
import {GiSpoon, GiKnifeFork} from "react-icons/gi"

export default class RecipeMedium extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: undefined,
        subtext: undefined,
        category: undefined,
        servings: undefined,
        difficulty: undefined,
        time_needed: undefined,
        image: undefined,
    }
  }

  render() {
    
    return (
      <div>
          
        <div className="recipe-medium-outer">
          <div className="recipe-inner-column-1">
              <div className="recipe-inner-row-1">
              <img className="recipe-medium-image" src="https://images.ctfassets.net/9eq7letzz02f/6FXvQVmZBK7iEE5WgnvRZN/05f83b6192b5281273f8f51980bc4f73/photo-1509482560494-4126f8225994.jpeg"></img>
              </div>
              <div className="recipe-inner-row-2">
                <p className="recipe-heading">Apfel-Pfannkuchen</p>
                <p className="recipe-subheading">...das besondere Frühstück!</p>
                <p className="recipe-text">Mehl und Salz mischen. Eigelb vom Eiweiß trennen (Eiweiß aufheben). Eigelb mit der Milch verrühren. Diese Zutaten (außer dem Eiweiß) zu einem Teig vermischen. Vanille-Aroma zugeben.

Das Eiweiß mit jeweils einer kleinen Prise Zucker und Salz zu steifem Schnee schlagen; Eischnee vorsichtig unter den Teig heben.</p>
<a href="#" className="recipe-link">Mehr lesen...</a>
              </div>
          </div>

          <div className="recipe-inner-column-2">
              <div className="recipe-inner-row-container">
              <BsClockHistory className="recipe-icon"/>
              <p className="recipe-subheading">Zeit:</p>
              <p className="recipe-subheading">20 Min.</p>
              </div>
              <div className="recipe-inner-row-container">
              <GiSpoon className="recipe-icon"/>
              <p className="recipe-subheading">Schwierigkeit:</p>
              <p className="recipe-subheading">Leicht</p>
              </div>
              <div className="recipe-inner-row-container">
              <GiKnifeFork className="recipe-icon"/>
              <p className="recipe-subheading">Portionen:</p>
              <p className="recipe-subheading">3</p>
              

              
              </div>
              
              
          </div>
          
        </div>


      </div>
    );
  }
}
