import React from "react";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import HeroLarge from '../components/HeroLarge'
import Services from '../components/Services'
import FeaturedRooms from "../components/FeaturedRooms";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroLarge title="Luxurious Vacation Rooms" subtitle="Rooms starting at $155" linkText="OUR ROOMS" />
      <Services />
      


      <div className="room-card-container">
       <FeaturedRooms />
      </div>
    </div>
  );
}