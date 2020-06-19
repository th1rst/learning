import React from "react";
import Navbar from "../components/navbar";
import "typeface-roboto";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="home-background">
        <div className="floating-box">
          <div className="floating-box-inner-row-1">
            <h1>Luxurious Vacation Rooms</h1>
          </div>
          <div className="divider"></div>
          <div className="floating-box-inner-row-3">
            <h1>Rooms starting at $155</h1>
          </div>
          <Link to="/rooms" className="rooms-link-box">
            OUR ROOMS
          </Link>
        </div>
      </div>
    </div>
  );
}
