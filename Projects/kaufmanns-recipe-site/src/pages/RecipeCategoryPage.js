import React, { Component } from 'react'
import { RecipesContext } from "../context"
import BackgroundImage from '../components/BackgroundImage';
import Navigation from '../components/Navigation';
import RecipeListContainer from '../components/RecipeListContainer';

export default class RecipeCategoryPage extends Component {
    static contextType = RecipesContext; 
    constructor(props) {
        super(props);
        this.state = {
            categoryName: "Brot", 
        }
    }
    render() {
        const recipes = this.context
        return (
            <div>
                {console.log(this.state.categoryName)}
                <BackgroundImage />
                <Navigation />
                <RecipeListContainer />
                {/* recipes.map(entry => entry.filter(recipe => recipe.category === "XYZ" ? render recipe)) */}
            </div>
        )
    }
}
