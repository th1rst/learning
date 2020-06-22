import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Carousel from 'react-bootstrap/Carousel';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price: [],
      image: [],
      slug: [],
      key: [],
      capacity: [],
      type: [],
      size: [],
      pets: null,
      breakfast: null,
      featured: [],
      description: [],
      extras: [],
    };
    console.log(this.props.location.state.price)
  }
  
 


  render() {

    return (
      <div>
        <Navbar />
    <p>Price: {this.props.location.state.price}</p>
    <p>Name: {this.props.location.state.name}</p>
    <p>Size: {this.props.location.state.size}ft</p>
    <p>Extras: {this.props.location.state.extras}</p>
    <p>Capacity: {this.props.location.state.capacity}</p>
    <p>Description: <br />{this.props.location.state.description}</p>

      </div>
    );
  }
}
