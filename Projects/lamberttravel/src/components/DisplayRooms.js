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
        capacity: 3,
        pets: true,
        breakfast: false,
      },
      filterList: [],
    };
  }

  componentDidMount() {
    this.fetchRoomsData();
  }

  handleClick1() {
    this.filterByPrice();
  }

  handleClick2() {
    this.filterByPets();
  }

  handleClick3() {
    this.filterByCapacity();
  }

  handleClick4() {
    this.filterByBreakfast();
  }

  handleClick5() {
    this.generateAllRooms();
  }

  filterByPrice() {
    let tempArr = [];
    this.state.roomsToDisplay.map((room) =>
      room.props.price < this.state.hasFilter.price ? tempArr.push(room) : null
    );
    if (tempArr.length > 0) {
      this.setState({ roomsToDisplay: tempArr });
    } else {
      this.setState({
        roomsToDisplay: <h1>There are no matching results.</h1>,
      });
    }
  }

  filterByPets() {
    let tempArr = [];
    this.state.roomsToDisplay.map((room) =>
      room.props.pets ? tempArr.push(room) : null
    );
    if (tempArr.length > 0) {
      this.setState({ roomsToDisplay: tempArr });
    } else {
      this.setState({
        roomsToDisplay: <h1>There are no matching results.</h1>,
      });
    }
  }

  filterByBreakfast() {
    let tempArr = [];
    this.state.roomsToDisplay.map((room) =>
      room.props.breakfast ? tempArr.push(room) : null
    );
    if (tempArr.length > 0) {
      this.setState({ roomsToDisplay: tempArr });
    } else {
      this.setState({
        roomsToDisplay: <h1>There are no matching results.</h1>,
      });
    }
  }

  filterByCapacity() {
    let tempArr = [];
    this.state.roomsToDisplay.map((room) =>
      room.props.capacity > this.state.hasFilter.capacity
        ? tempArr.push(room)
        : null
    );
    if (tempArr.length > 0) {
      this.setState({ roomsToDisplay: tempArr });
    } else {
      this.setState({
        roomsToDisplay: <h1>There are no matching results.</h1>,
      });
    }
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
    this.setState({ allRooms: finalDiv, roomsToDisplay: finalDiv });
  }

  render() {
    return (
      <>
          <div className="search-field-outer-box">
          <div className="search-field-row-1">
            <div className="search-field-row-inner">
              <h1>Minimum Guests</h1>
              <input className="input-form" type="text" name="name" />
            </div>
            <div className="search-field-row-inner">
              <h1>Maximum price/night</h1>
              <input className="input-form" type="text" name="name" />
            </div>
            <div className="search-field-row-inner">
              <div className="search-field-row-inner-container">
                <input name="pets" id="pets" type="checkbox"></input>
                <label htmlFor="pets">
                  <h1>Pets allowed</h1>
                </label>
              </div>
            </div>
            <div className="search-field-row-inner">
              <div className="search-field-row-inner-container">
                <input name="breakfast" id="breakfast" type="checkbox"></input>
                <label htmlFor="breakfast">
                  <h1>Breakfast included</h1>
                </label>
              </div>
            </div>
          </div>
          <div className="search-field-row-2">
            <div className="search-field-row-inner">
              <button
                className="search-field-button"
                onClick={() => this.handleClick5()}
              >
                {" "}
                Search{" "}
              </button>
            </div>

            <div className="search-field-row-inner">
              <button
                className="search-field-button"
                onClick={() => this.handleClick5()}
              >
                {" "}
                Reset Filter{" "}
              </button>
            </div>
          </div>
        </div>

        {this.state.data ? (
          <div className="room-card-container">{this.state.roomsToDisplay}</div>
        ) : undefined}
      </>
    );
  }
}

/*
filterByPrice() {
let tempArr = [];
this.state.roomsToDisplay.map((room) =>
room.props.price < this.state.hasFilter.price ? tempArr.push(room) : null);
if (tempArr.length > 0) {
this.setState({ roomsToDisplay: tempArr });
} else {
this.setState({ roomsToDisplay: (<h1>There are no matching results.</h1>) })
}
}

filterByPets() {
let tempArr = [];
this.state.roomsToDisplay.map((room) =>
room.props.pets ? tempArr.push(room) : null);
if (tempArr.length > 0) {
this.setState({ roomsToDisplay: tempArr });
} else {
this.setState({ roomsToDisplay: (<h1>There are no matching results.</h1>) })
}
}

filterByBreakfast() {
let tempArr = [];
this.state.roomsToDisplay.map((room) =>
room.props.breakfast ? tempArr.push(room) : null);
if (tempArr.length > 0) {
this.setState({ roomsToDisplay: tempArr });
} else {
this.setState({ roomsToDisplay: (<h1>There are no matching results.</h1>) })
}
}

filterByCapacity() {
let tempArr = [];
this.state.roomsToDisplay.map((room) =>
room.props.capacity > this.state.hasFilter.capacity ? tempArr.push(room) : null);
if (tempArr.length > 0) {
this.setState({ roomsToDisplay: tempArr });
} else {
this.setState({ roomsToDisplay: (<h1>There are no matching results.</h1>) })
}
}
*/

/* INNER FOR SEARCH FORM

<div className="form">
<label htmlFor="capacity">Guests: </label>
<select name="capacity" id="capacity" className="select-box">
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
<button onClick={() => this.handleClick1()}> Filter By Price </button>
<button onClick={() => this.handleClick2()}> Filter By Pets </button>
<button onClick={() => this.handleClick3()}> Filter By capacity </button>
<button onClick={() => this.handleClick4()}> Filter By breakfast </button>
<button onClick={() => this.handleClick5()}> Reset Filter </button>


*/
