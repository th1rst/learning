import React from "react";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import HeroLarge from '../components/HeroLarge'
import Services from '../components/Services'


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroLarge title="Luxurious Vacation Rooms" subtitle="Rooms starting at $155" linkText="OUR ROOMS" />
      <Services />



      <div className="room-card-container">
        <div className="room-card">
          <div className="image-overlay">
            <div className="image-overlay-linkbox">
              <h1>FEATURES</h1>
            </div>
          </div>

          <img
            className="room-card-image"
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="room"
          ></img>
          <div className="room-card-pricetag">
            <h4>$123</h4>
            <h5>per night</h5>
          </div>
          <div className="room-image-subtitle-bar">
            <div className="room-image-subtitle-bar-text">Double Economy</div>
          </div>
        </div>
        <div className="room-card">
          <div className="image-overlay">
            <div className="image-overlay-linkbox">
              <h1>FEATURES</h1>
            </div>
          </div>
          <img
            className="room-card-image"
            src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="room"
          ></img>
          <div className="room-card-pricetag">
            <h4>$234</h4>
            <h5>per night</h5>
          </div>
          <div className="room-image-subtitle-bar">
            <div className="room-image-subtitle-bar-text">Double Standard</div>
          </div>
        </div>
        <div className="room-card">
          <div className="image-overlay">
            <div className="image-overlay-linkbox">
              <h1>FEATURES</h1>
            </div>
          </div>
          <div className="room-card-pricetag">
            <h4>$345</h4>
            <h5>per night</h5>
          </div>
          <img
            className="room-card-image"
            src="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            alt="room"
          ></img>
          <div className="room-image-subtitle-bar">
            <div className="room-image-subtitle-bar-text">
              Beachfront Luxurious
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
