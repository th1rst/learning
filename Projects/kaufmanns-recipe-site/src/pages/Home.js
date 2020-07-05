import React, { Component } from "react";
import Navigation from "../components/Navigation";
import RecipeMedium from "../components/Recipes/RecipeMedium";
import { RecipesContext } from "../context"
import BackgroundImage from "../components/BackgroundImage";


export default class Home extends Component {
 static contextType = RecipesContext; 
  render() {
    const {recipes, fetched} = this.context
    return (
      <div>
          <BackgroundImage />
          <Navigation />
        
        {console.log(recipes[1])}
          <RecipeMedium />
       
          
     
      </div>
    );
  }
}
