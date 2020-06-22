import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class SingleRoom extends Component {
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
        <Navbar />I am SingleRoom page!
      </div>
    );
  }
}
