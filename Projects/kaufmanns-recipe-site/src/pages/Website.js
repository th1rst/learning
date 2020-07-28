import React from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import { FaHeart, FaReact, FaGithub } from "react-icons/fa";

export default function Website() {
  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="recipe-list-container">
        <div className="about-website-heading-container">
          <img
            className="logo-website-page"
            src={require("../images/logo_medium.png")}
            alt="logo of website"
          />
          <p className="about-website-heading">Über die Webseite</p>
        </div>
        <div className="about-website-text-container">
          Am Anfang war die Zettelwirtschaft.
          <br />
          <br />
          Ich erinnere mich noch genau, als ich im Sommer 2008 den Ordner mit
          Rezepten meines Opas sah, der immer penibelst gepflegt wurde und aus
          dessen Rezepten unsere Familie schon seit Jahrzehnten kochte.
          <br />
          <br />
          Da den Männern in unserer Familie nicht nur der Hang zum kulinarischen
          Perfektionismus "in die Wiege gelegt" scheint, sondern gleichermaßen
          der Hang zur IT-Affinität, entstand aus der ehemaligen
          Zettelwirtschaft eine Word-Datei, dann daraus ein eBook, dann eine
          "richtige" Printversion, die es sogar mal auf Amazon zu kaufen gab und
          die sie hier (als PDF) kostenlos herunterladen können, und
          schlussendlich dann eine Webseite mit den aktuellsten Technologien.
          <br />
          <br />
          Allen nicht IT-affinen Besuchern erspare ich an dieser Stelle das
          technische - alle Interessierten können jedoch, bei Klick auf den Link
          unten, den Code auf Github einsehen.
          <br />
          <br />
          Viel Spaß beim Kochen!
          <div className="made-with-react-container">
            <div className="react-container-inner-row">
              Made with <FaHeart className="heart-icon" /> with
              <a href="https://reactjs.org/">
                <FaReact className="react-icon" />
              </a>
            </div>
            <div className="react-container-inner-row">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://github.com/th1rst/learning/tree/master/Projects/kaufmanns-recipe-site"
              >
                View on <FaGithub className="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
