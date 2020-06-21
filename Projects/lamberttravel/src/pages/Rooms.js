import React from "react";
import Navbar from "../components/Navbar";
import HeroSmall from "../components/HeroSmall"
import AllRooms from "../components/AllRooms";
const Rooms = () => {
  return (
    
    <div>
      <Navbar />
      <HeroSmall 
        title="Small Hero"
        subtitle="Subtitle Bla"
        linkText="Link to Room"
        image="https://images.unsplash.com/photo-1572177215152-32f247303126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80"
        />
      <AllRooms />
    </div>
  );
};

export default Rooms