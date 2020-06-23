import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      price: [],
      titleImage: [],
      allImages: [],
      slug: [],
      capacity: [],
      type: [],
      size: [],
      pets: null,
      breakfast: null,
      featured: [],
      description: [],
      extras: [],
    };
  }

  render() {
    return (
      <div>
        <div className="room-card">
          <div className="image-overlay">
            <Link
              to={{
                pathname: `/rooms/:${this.props.slug}`,
                state: {
                  name: this.props.name,
                  price: this.props.price,
                  titleImage: this.props.titleImage,
                  allImages: this.props.allImages,
                  slug: this.props.slug,
                  capacity: this.props.capacity,
                  type: this.props.type,
                  size: this.props.size,
                  pets: this.props.pets,
                  breakfast: this.props.breakfast,
                  featured: this.props.featured,
                  description: this.props.description,
                  extras: this.props.extras,
                },
              }}
              rel="noopener noreferrer"
              key={this.state.key}
            >
              <div className="image-overlay-linkbox">
                <h1>FEATURES</h1>
              </div>
            </Link>
          </div>
          <img
            className="room-card-image"
            src={this.props.titleImage}
            alt="room"
          ></img>
          <div className="room-card-pricetag">
            <h4>{this.props.price}</h4>
            <h5>per night</h5>
          </div>
          <div className="room-image-subtitle-bar">
            <div className="room-image-subtitle-bar-text">
              {this.props.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
