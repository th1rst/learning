import React, { Component } from "react";


export default class SearchField extends Component {
  handleChange(e) {
    console.log(e)
  }
  
  render() {
    return (
      <div className="search-field-outer-box">
        
        
        <div className="form">
          <label htmlFor="capacity">Guests: </label>
          <select name="capacity" id="capacity" value={"asd"} className="select-box" onChange={this.handleChange}>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>



        <div className="form">
          <label htmlFor="price">Price: </label>
          <input name="price" id="price" type="range" min="0" max="999" />
        </div>
        
        
      </div>
    );
  }
}
