import React from "react";
import { FaAccessibleIcon, FaWifi, FaShuttleVan, FaSmile} from "react-icons/fa";

export default function Services() {
  return (
    <div>
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
    </div>
  );
}
