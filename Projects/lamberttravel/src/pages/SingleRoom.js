import React, { Component } from "react";
import Navbar from "../components/Navbar";
import HeroSmall from "../components/HeroSmall";
import { GiPriceTag } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { FaDog, FaQuoteRight } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { RiRulerLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price: [],
      titleImage: [],
      allImages: [],
      slug: [],
      key: [],
      capacity: [],
      type: [],
      size: [],
      pets: null,
      breakfast: null,
      featured: [],
      description: [],
      extras: [],
    };
  }

  render() {
    const EMAIL = process.env.REACT_APP_MAIL_ADDRESS;
    const {
      name,
      price,
      size,
      titleImage,
      allImages,
      capacity,
      breakfast,
      pets,
      extras,
      description,
    } = this.props.location.state;

    return (
      <div>
        <Navbar />
        <HeroSmall
          title={name}
          subtitle={`Only $${price} a night for ${size} square feet`}
          image={titleImage}
        />

        <div className="section-heading">
          <h1>GALLERY</h1>
          <div className="divider-small"></div>
        </div>

        <div className="gallery-container">
          {allImages.map((image) => (
            <div className="gallery-item">
              <a href={`https:${image}`}>
                <img className="gallery-picture" src={image} alt="room"></img>
              </a>
            </div>
          ))}
        </div>
        <div>
          <div className="info-section-heading">
            <h1>INFO</h1>
            <div className="divider-small"></div>
          </div>
          <div className="info-section">
            <div className="info-subsection-box">
              <GiPriceTag className="services-icon" />
              <h2>
                PRICE:
                <br />
                <br /> {price} per night
              </h2>
            </div>
            <div className="info-subsection-box">
              <RiRulerLine className="services-icon" />
              <h2>
                SIZE:
                <br />
                <br /> {size} sqft.
              </h2>
            </div>
            <div className="info-subsection-box">
              <BsPeopleFill className="services-icon" />
              <h2>
                CAPACITY:
                <br />
                <br />
                {capacity > 1 ? `${capacity} PEOPLE` : `${capacity} PERSON`}
              </h2>
            </div>
            <div className="info-subsection-box">
              <GiKnifeFork className="services-icon" />
              <h2>
                BREAKFAST:
                <br />
                <br />
                {breakfast ? "YES" : "NO"}
              </h2>
            </div>
            <div className="info-subsection-box">
              <FaDog className="services-icon" />
              <h2>
                PETS ALLOWED:
                <br />
                <br /> {pets ? "YES" : "NO"}
              </h2>
            </div>
            <div className="info-extras-box">
              <div className="extras-list-row-1">
                <h2>EXTRAS:</h2>
                <br />
              </div>
              <div className="extras-list-row-2">
                {extras.map((item) => (
                  <div className="extras-list-item">
                    <IoMdCheckmarkCircleOutline className="extras-checkmark" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section-heading">
            <h1>DETAILS</h1>
            <div className="divider-small"></div>
          </div>
          <div className="description-box">
            <FaQuoteRight className="quotation-symbol" />
            <div className="quotation-box">
              <p>{description}</p>
            </div>
          </div>
          <div className="book-now-box">
            <a
              href={`mailto:${EMAIL}?subject=Hey,%20I%20like%20your%20page,%20let's%20get%20in%20touch!`}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    );
  }
}
