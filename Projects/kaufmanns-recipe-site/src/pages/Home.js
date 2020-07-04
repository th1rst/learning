import React, { Component } from 'react'
import Navigation from "../components/Navigation"
import Recipe from "./Recipe"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
                <Recipe />
            </div>
        )
    }
}
