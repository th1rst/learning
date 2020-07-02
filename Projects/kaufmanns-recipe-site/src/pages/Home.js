import React, { Component } from 'react'
import Navbar from "../components/Navbar"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>hello from Home.js!</h1>
            </div>
        )
    }
}
