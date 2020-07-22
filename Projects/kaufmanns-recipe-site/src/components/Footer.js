import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-inner">
                    <p className="footer-text">Kontakt</p>
                </div>
                <div className="footer-inner">
                    
                </div>
                <div className="footer-inner">
                    <Link to={"/datenschutz"}>
                    <p className="footer-text">Datenschutzerklärung</p>
                    </Link>
                </div>
                <div className="footer-inner">
                <Link to={"/impressum"}>
                    <p className="footer-text">Impressum</p>
                    </Link>
                </div>
            </footer>
        )
    }
}