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
        <div className="room-card">
          <div className="image-overlay">
            <div className="image-overlay-linkbox">
              <h1>FEATURES</h1>
            </div>
          </div>

          <img
            className="room-card-image"
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
