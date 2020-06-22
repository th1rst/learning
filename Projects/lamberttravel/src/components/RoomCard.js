import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      price: [],
      image: [],
      slug: [],
      key: [],
      capacity: [],
      type: [],
      size: [],
      pets: [],
      breakfast: [],
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
              to={`/rooms/${this.props.slug}`}
              target="_blank"
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
            src={this.props.image}
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

