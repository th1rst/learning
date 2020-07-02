import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="navbar-container">
                <div class="navbar-item"><h5>Kategorien</h5></div>
                <div class="navbar-item"><h5>Zufallsrezept</h5></div>
                <img src={require("../images/logo_small2.png")} class="navbar-logo" alt="kaufmann-logo" />
        



                </div>
                
            </div>
        )
    }
}
