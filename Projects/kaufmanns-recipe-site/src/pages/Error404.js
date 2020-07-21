import React, { Component } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default class Error404 extends Component {
  render() {
    return (
      <div>
        <BackgroundImage />
        <Navigation />
        <div className="error-container">
          <p className="error-text">404</p>
          <br />
          <p className="error-subtext">Die gesuchte Seite existiert nicht.</p>
          <img
            className="error-image"
            src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="dish with sad face"
          />
        </div>

        <Footer />
      </div>
    );
  }
}
