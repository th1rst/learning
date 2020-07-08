import React, { Component } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import {FaShareAlt} from "react-icons/fa"

export default class SocialShare extends Component {

  MouseOver(event) {
    event.target.style.fill = "rgb(235, 198, 96)";
  }

  MouseOut(event) {
    event.target.style.fill = "";
  }

  render() {
    return (
      <div className="social-share-container-outer">
          <FaShareAlt className="share-icon"/><p className="properties-text">Teilen</p>
          <div className="social-share-container-inner">
        <EmailShareButton url={window.location.href}>
          <EmailIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </EmailShareButton>
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </FacebookShareButton>
        <LinkedinShareButton url={window.location.href}>
          <LinkedinIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </LinkedinShareButton>
        <PinterestShareButton url={window.location.href}>
          <PinterestIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </PinterestShareButton>
        <RedditShareButton url={window.location.href}>
          <RedditIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </RedditShareButton>
        <TelegramShareButton url={window.location.href}>
          <TelegramIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </TelegramShareButton>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href}>
          <WhatsappIcon
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
            size={45}
            round={true}
          />
        </WhatsappShareButton>
        </div>
      </div>
    );
  }
}
