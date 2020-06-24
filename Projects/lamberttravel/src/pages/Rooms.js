import React from "react";
import Navbar from "../components/Navbar";
import HeroSmall from "../components/HeroSmall"
import AllRooms from "../components/AllRooms";
import SearchField from "../components/SearchField";

const Rooms = () => {
  return (
    
    <div>
      <Navbar />
      <HeroSmall 
        title="Browse our Rooms"
        subtitle="Luxurious Vacation Homes"
        linkText="Search"
        image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
        />
        <div className="section-heading">
        <h1>SEARCH ROOMS</h1>
        <div className="divider-small"></div>
      </div>
      <AllRooms />
    </div>
  );
};

export default Rooms