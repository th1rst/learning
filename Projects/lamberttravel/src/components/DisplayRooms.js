import React, { Component } from "react";
import Roomcard from "./RoomCard.js";
import { FaSearch } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

export default class AllRooms extends Component {
  constructor() {
    super();
    this.priceFilterInput = React.createRef();
    this.guestFilterInput = React.createRef();
    this.state = {
      data: undefined,
      fetched: false,
      roomsToDisplay: [],
      hasPriceFilter: false,
      hasCapacityFilter: false,
      hasPetsFilter: false,
      hasBreakfastFilter: false,
      breakfastCheckboxChecked: false,
      petCheckboxChecked: false,
    };
  }

  componentDidMount() {
    this.fetchRoomsData();
  }

  toggleBreakfastFilter = async function () {
    await this.setState({
      hasBreakfastFilter: !this.state.hasBreakfastFilter,
      breakfastCheckboxChecked: !this.state.breakfastCheckboxChecked,
    });
  };

  togglePetFilter = async function () {
    await this.setState({
      hasPetsFilter: !this.state.hasPetsFilter,
      petCheckboxChecked: !this.state.petCheckboxChecked,
    });
  };

  handlePriceFilterInput = async function () {
    let userInput = this.priceFilterInput.current.value;
    await this.setState({ hasPriceFilter: userInput });
  };

  handleGuestFilterInput = async function () {
    let userInput = this.guestFilterInput.current.value;
    await this.setState({ hasCapacityFilter: userInput });
  };

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

  handleSearchButton = async function () {
    let tempArr = [];

    // 4 filters
    if (
      this.state.hasPriceFilter &&
      this.state.hasCapacityFilter &&
      this.state.hasBreakfastFilter &&
      this.state.hasPetsFilter
    ) {
      //clear tempArray before every new search
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter &&
        room.props.capacity >= this.state.hasCapacityFilter &&
        room.props.pets &&
        room.props.breakfast
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

    //3 filters
    else if (
      this.state.hasPriceFilter &&
      this.state.hasCapacityFilter &&
      this.state.hasBreakfastFilter
    ) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter &&
        room.props.capacity >= this.state.hasCapacityFilter &&
        room.props.breakfast
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
    } else if (
      this.state.hasPriceFilter &&
      this.state.hasCapacityFilter &&
      this.state.hasPetsFilter
    ) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter &&
        room.props.capacity >= this.state.hasCapacityFilter &&
        room.props.pets
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
    } else if (
      this.state.hasPriceFilter &&
      this.state.hasPetsFilter &&
      this.state.hasBreakfastFilter
    ) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter &&
        room.props.pets &&
        room.props.breakfast
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
    } else if (this.state.hasPetsFilter && this.state.hasBreakfastFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.pets &&
        room.props.breakfast &&
        room.props.capacity >= this.state.hasCapacityFilter
          ? tempArr.push(room)
          : null
      );
      console.log("3 filters applied (pets, breakfast, capacity)");
      if (tempArr.length > 0) {
        this.setState({ roomsToDisplay: tempArr });
      } else {
        this.setState({
          roomsToDisplay: <h1>There are no matching results.</h1>,
        });
      }
    } else if (
      this.state.hasCapacityFilter &&
      this.state.hasPetsFilter &&
      this.state.hasBreakfastFilter
    ) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.capacity >= this.state.hasCapacityFilter &&
        room.props.pets &&
        room.props.breakfast
          ? tempArr.push(room)
          : null
      );
      if (tempArr.length >= 0) {
        this.setState({ roomsToDisplay: tempArr });
      } else {
        this.setState({
          roomsToDisplay: <h1>There are no matching results.</h1>,
        });
      }
    }

    // 2 filters
    else if (this.state.hasPriceFilter && this.state.hasCapacityFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter &&
        room.props.capacity >= this.state.hasCapacityFilter
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
    } else if (this.state.hasPriceFilter && this.state.hasPetsFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter && room.props.pets
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
    } else if (this.state.hasPriceFilter && this.state.hasBreakfastFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter && room.props.breakfast
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
    } else if (this.state.hasCapacityFilter && this.state.hasPetsFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.capacity >= this.state.hasCapacityFilter && room.props.pets
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
    } else if (this.state.hasCapacityFilter && this.state.hasBreakfastFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.capacity >= this.state.hasCapacityFilter &&
        room.props.breakfast
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
    } else if (this.state.hasPetsFilter && this.state.hasBreakfastFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.pets && room.props.breakfast ? tempArr.push(room) : null
      );
      if (tempArr.length > 0) {
        this.setState({ roomsToDisplay: tempArr });
      } else {
        this.setState({
          roomsToDisplay: <h1>There are no matching results.</h1>,
        });
      }
    }

    // 1 Filter
    else if (this.state.hasPriceFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.price <= this.state.hasPriceFilter
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
    } else if (this.state.hasCapacityFilter) {
      tempArr = [];
      this.state.roomsToDisplay.map((room) =>
        room.props.capacity >= this.state.hasCapacityFilter
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
    } else if (this.state.hasPetsFilter) {
      tempArr = [];
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
    } else if (this.state.hasBreakfastFilter) {
      tempArr = [];
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
  };

  handleResetButton() {
    this.setState({
      hasPriceFilter: undefined,
      hasCapacityFilter: undefined,
      hasPetsFilter: false,
      hasBreakfastFilter: false,
      breakfastCheckboxChecked: false,
      petCheckboxChecked: false,
    });
    this.priceFilterInput.current.value = "";
    this.guestFilterInput.current.value = "";
    this.generateAllRooms();
  }

  render() {
    return (
      <>
        <div className="search-field-outer-box">
          <div className="search-field-row-1">
            <div className="search-field-row-inner">
              <h1>Minimum Guests</h1>
              <input
                className="input-form"
                type="text"
                name="capacity"
                ref={this.guestFilterInput}
                onChange={() => this.handleGuestFilterInput()}
              />
            </div>
            <div className="search-field-row-inner">
              <h1>Maximum price/night</h1>
              <input
                className="input-form"
                type="text"
                name="price"
                ref={this.priceFilterInput}
                onChange={() => this.handlePriceFilterInput()}
              />
            </div>
            <div className="search-field-row-inner">
              <div className="search-field-row-inner-container">
                <input
                  name="pets"
                  id="pets"
                  type="checkbox"
                  value={this.state.hasPetsFilter}
                  checked={this.state.petCheckboxChecked}
                  onChange={this.togglePetFilter.bind(this)}
                />
                <label htmlFor="pets">
                  <h1 className="checkbox-text">Pets allowed</h1>
                </label>
              </div>
            </div>
            <div className="search-field-row-inner">
              <div className="search-field-row-inner-container">
                <input
                  name="breakfast"
                  id="breakfast"
                  type="checkbox"
                  value={this.state.hasBreakfastFilter}
                  checked={this.state.breakfastCheckboxChecked}
                  onChange={this.toggleBreakfastFilter.bind(this)}
                />
                <label htmlFor="breakfast">
                  <h1 className="checkbox-text">Breakfast included</h1>
                </label>
              </div>
            </div>
          </div>
          <div className="search-field-row-2">
            <div className="search-field-row-inner">
              <button
                className="search-field-button"
                onClick={() => this.handleSearchButton()}
              >
                <FaSearch style={{ marginRight: "0.5vw" }} /> Search{" "}
              </button>
            </div>

            <div className="search-field-row-inner">
              <button
                className="search-field-button"
                onClick={() => this.handleResetButton()}
              >
                <FiXCircle style={{ marginRight: "0.5vw" }} />
                Reset Filter
              </button>
            </div>
          </div>
        </div>
        {this.state.fetched ? (
          <div className="room-card-container">{this.state.roomsToDisplay}</div>
        ) : undefined}
      </>
    );
  }
}