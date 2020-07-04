import React, { Component } from 'react'
import { RecipesContext } from "../context"

export default class Recipe extends Component {
    static contextType = RecipesContext;
    render() {
        const {fetched} = this.context
      
        return (
            <div>
                hello {fetched} from recipe.js!
            </div>
        )
    }
}
