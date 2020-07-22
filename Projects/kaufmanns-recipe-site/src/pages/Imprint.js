import React from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

export default function Imprint() {
  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="data-privacy-container">
        <h1>Hello from Imprint</h1>
      </div>
      <Footer />
    </div>
  );
}
