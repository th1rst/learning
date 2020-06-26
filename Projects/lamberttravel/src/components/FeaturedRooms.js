import React, { Component } from "react";
import Roomcard from "./RoomCard.js";

export default class FeaturedRooms extends Component {
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
    const contentful = require("contentful");
    const API_KEY = process.env.REACT_APP_CONTENTFUL_RESORT_API_KEY;

    const client = contentful.createClient({
      space: "9eq7letzz02f",
      accessToken: `${API_KEY}`,
    });
    client
      .getEntries({ content_type: "resortRoom" })
      .then((entry) => {
        this.setState({ data: entry, fetched: true });
      })
      .catch((err) => console.log(err));
  }

  generateFeaturedRooms() {
    let finalDiv = [];

    this.state.data.items.map((room) =>
      room.fields.featured === true ? (
        finalDiv.push(
          <Roomcard
            price={room.fields.price}
            titleImage={`https:${room.fields.images[0].fields.file.url}`}
            allImages={room.fields.images.map((image) => image.fields.file.url)}
            name={room.fields.name.toUpperCase()}
            slug={room.fields.slug}
            capacity={room.fields.capacity}
            type={room.fields.type}
            size={room.fields.size}
            pets={room.fields.pets}
            breakfast={room.fields.breakfast}
            featured={room.fields.featured}
            description={room.fields.description}
            extras={room.fields.extras}
            key={Math.random() * 1000}
          />
        )
      ) : (
        <div>
          <p>There are currently no featured Rooms.</p>
        </div>
      )
    );
    return finalDiv;
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <div className="room-card-container">
            {this.generateFeaturedRooms()}
          </div>
        ) : undefined}
      </>
    );
  }
}
