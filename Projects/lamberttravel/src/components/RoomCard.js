import React, { Component } from "react";

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      category: null,
      image: null,
    };
  }
  render() {
    return (
      <div>
        <div className="room-card">
          <div className="image-overlay">
            <div className="image-overlay-linkbox">
              <h1>FEATURES</h1>
            </div>
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
              {this.props.category}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
