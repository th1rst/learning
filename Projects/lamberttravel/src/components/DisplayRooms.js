import React, { Component } from "react";
import Roomcard from "./RoomCard.js";

export default class AllRooms extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      fetched: false,
      roomsToDisplay: [],
      hasFilter: {
        price: 300,
        capacity: false,
        pets: false,
        breakfast: false,
      },
    };
  }

  componentDidMount() {
    this.fetchRoomsData();
  }

  handleClick() {
    this.generateFilteredRooms();
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
        this.generateAllRooms();
      })
      .catch((err) => console.log(err));
  }

  generateAllRooms() {
    let finalDiv = [];

    this.state.data.items.map((room) =>
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
    );
    this.setState({ roomsToDisplay: finalDiv });
  }

  generateFilteredRooms() {
    let finalDiv = [];
    this.state.data.items.map((room) =>
      room.fields.price < this.state.hasFilter.price
        ? finalDiv.push(
            <Roomcard
              price={room.fields.price}
              titleImage={`https:${room.fields.images[0].fields.file.url}`}
              allImages={room.fields.images.map(
                (image) => image.fields.file.url
              )}
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
        : undefined
    );
    this.setState({ roomsToDisplay: finalDiv });
  }

  render() {
    return (
      <>
        <div className="search-field-outer-box">
          <div className="form">
            <label htmlFor="capacity">Guests: </label>
            <select
              name="capacity"
              id="capacity"
              className="select-box"
            >
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>

          <div className="form">
            <label htmlFor="price">Max price: </label>
            <input name="price" id="price" type="range" min="0" max="999" />
          </div>

          <button onClick={() => this.handleClick()}> Filter By Price </button>

        </div>

        {this.state.data ? (
          <div className="room-card-container">{this.state.roomsToDisplay}</div>
        ) : undefined}
      </>
    );
  }
}
