import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeroSmall extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      subtitle: null,
      linkText: null,
      image: null
    }
  }
  render() {
    return (
      <div>
        <div className="home-background home-background-small" style={{backgroundImage: `url(${this.props.image})`}}>
          <div className="floating-box floating-box-small">
            <div className="floating-box-inner-row-1">
             <h1>{this.props.title}</h1>
            </div>
            <div className="divider"></div>
            <div className="floating-box-inner-row-3">
              <h1>{this.props.subtitle}</h1>
            </div>
            <Link to="/rooms" className="rooms-link-box">
              {this.props.linkText}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
