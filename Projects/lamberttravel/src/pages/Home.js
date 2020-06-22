import React from "react";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import HeroLarge from '../components/HeroLarge'
import Services from '../components/Services'
import Roomcard from '../components/RoomCard'


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroLarge title="Luxurious Vacation Rooms" subtitle="Rooms starting at $155" linkText="OUR ROOMS" />
      <Services />
      


      <div className="room-card-container">
        <Roomcard 
          price="123"
          image="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          name={`Double Economy`.toUpperCase()}
        />
        <Roomcard 
          price="234"
          image="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          name={`Double standard`.toUpperCase()}
        />
        <Roomcard 
          price="345"
          image="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          name={`Beachfront Luxurious`.toUpperCase()}
        />
      </div>
    </div>
  );
}
