import React, { Component } from 'react'
import { RecipesContext } from "../context"
import RecipeSmall from "../components/Recipes/RecipeSmall"


export default class RecipeListContainer extends Component {
    static contextType = RecipesContext;
    
    constructor(props) {
        super(props);
        this.state = {
            recipes: this.context,
            category: "Brot",
            amountOfRecipes: 17
        }
    }
    
    render() {
        const {recipes, fetched} = this.context
        return (
            <div>
                <div className="recipe-list-container">
                    <div className="recipe-list-heading-row">
                    <p className="recipe-list-heading">{this.state.amountOfRecipes} Rezepte der Kategorie {this.state.category}:</p>
                    </div>
                    <div className="recipe-list-entry">
                    <RecipeSmall />
                    </div>
                    <div className="recipe-list-entry">
                        
                    </div>
                    <div className="recipe-list-entry">
                        
                    </div>
                    <div className="recipe-list-entry">
                        
                    </div>
                    <div className="recipe-list-entry">
                        
                    </div>
                    <div className="recipe-list-entry">
                        
                    </div>

                </div>
            </div>
        )
    }
}
