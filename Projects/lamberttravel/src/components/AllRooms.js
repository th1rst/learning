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
    this.fetchRoomsData();
  }

  fetchRoomsData() {
    const API_KEY = process.env.REACT_APP_CONTENTFUL_RESORT_API_KEY;
    fetch(`https://cdn.contentful.com/spaces/9eq7letzz02f/environments/master/entries?access_token=${API_KEY}&content_type=resortRoom`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data, fetched: true });
        //console.log(this.state.data.includes.Asset[0].fields.file.url)
        //console.log(this.state.data.items[0])
      });
  }

  generateAllRooms() {
    let finalDiv = [];
    for (let i = 0; i < this.state.data.items.length; i++) {
      finalDiv.push(
        <Roomcard
          price={"$" + this.state.data.items[i].fields.price}
          image={`https:${this.state.data.includes.Asset[i].fields.file.url}`}
          name={this.state.data.items[i].fields.name.toUpperCase()}
          slug={this.state.data.items[i].fields.slug}
          capacity={this.state.data.items[i].fields.capacity}
          type={this.state.data.items[i].fields.type}
          size={this.state.data.items[i].fields.size}
          pets={this.state.data.items[i].fields.pets}
          breakfast={this.state.data.items[i].fields.breakfast}
          featured={this.state.data.items[i].fields.featured}
          description={this.state.data.items[i].fields.description}
          extras={this.state.data.items[i].fields.extras}
          key={i}
          />
      );
    }
    return finalDiv;
  }

  render() {
    return (
      <>
        {this.state.data ? (
            <div className="room-card-container">
              {this.generateAllRooms()}
            </div>
        ) : undefined}
      </>
    );
  }
}
