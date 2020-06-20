import React from "react";
import Navbar from "../components/navbar";
import "typeface-roboto";
import { Link } from "react-router-dom";
import {
  FaAccessibleIcon,
  FaWifi,
  FaShuttleVan,
  FaSmile,
} from "react-icons/fa";

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

      <div className="services-section-heading">
        <h1>SERVICES</h1>
        <div className="divider-small"></div>
      </div>

      <div className="services-section">
        <div className="services-subsection-box">
          <FaWifi className="services-icon" />
          <h2>WIFI INCLUDED</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            voluptates non tenetur expedita officia ipsam!
          </p>
        </div>
        <div className="services-subsection-box">
          <FaShuttleVan className="services-icon" />
          <h2>FREE SHUTTLE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consequatur pariatur fuga debitis sapiente animi culpa itaque
            architecto, aspernatur recusandae.
          </p>
        </div>
        <div className="services-subsection-box">
          <FaAccessibleIcon className="services-icon" />
          <h2>ACCESSIBILITY</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            amet eum esse.
          </p>
        </div>
        <div className="services-subsection-box">
          <FaSmile className="services-icon" />
          <h2>FRIENDLY STAFF</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            culpa magnam ullam impedit!
          </p>
        </div>
      </div>

      <div className="services-section-heading-2">
        <h1>FEATURED ROOMS</h1>
        <div className="divider-small"></div>
      </div>

      <div className="room-card-container">
        <div className="room-card"></div>
        <div className="room-card"></div>
        <div className="room-card"></div>
      </div>
    </div>
  );
}
