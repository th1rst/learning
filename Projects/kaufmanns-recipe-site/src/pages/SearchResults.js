import React, { Component } from "react";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: this.props.searchQuery,
    };
  }
  
  render() {
    return (
      <div>
        <div className="recipe-list-container">
          <div className="recipe-list-heading">
            <h1>Suchergebnisse für `${this.state.searchQuery}`</h1>
          </div>
        </div>
      </div>
    );
  }
}
