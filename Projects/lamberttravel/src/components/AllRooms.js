import React, { Component } from "react";
import Roomcard from "./RoomCard.js";

export default class AllRooms extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      fetched: false,
    };
  }

  componentDidMount() {
    this.loadAllRooms();
  }

  loadAllRooms() {
    const API_KEY = process.env.REACT_APP_CONTENTFUL_RESORT_API_KEY;
    fetch(`https://cdn.contentful.com/spaces/9eq7letzz02f/environments/master/entries?access_token=${API_KEY}&content_type=resortRoom`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data, fetched: true });
        console.log(this.state.data.items[0])
        console.log(this.state.fetched)
    });
  }

  
  render() {
   
    return (
        <> 
          {this.state.data ? 

            <div className="room-card-container">
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
                <h4>{this.state.data.items[0].fields.price}</h4>
                <h5>per night</h5>
              </div>
              <div className="room-image-subtitle-bar">
                <div className="room-image-subtitle-bar-text">
                  {this.state.data.items[0].fields.name.toUpperCase()}
                </div>
              </div>
            </div>
        </div>

        : undefined}
    </>
    )
}
}
