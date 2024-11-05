import React from "react";
import "../styles/HeroCard.css"; // Assuming you have the styles in a separate file

import SocialIcon from "../images/social-media-icon.svg";
import WebIcon from "../images/web-development.svg";
import EmailIcon from "../images/email-marketing.svg";
import LeadIcon from "../images/lead-generation.svg";
import ProductIcon from "../images/product-design.svg";
import SEOIcon from "../images/seo-blog.svg";

const HeroCard = () => {
  return (
    <div className="hero-card-container">
      <div className="hero-card">
        <img src={SocialIcon} alt="Social Media" className="hero-card-img" />
        <p className="hero-card-text">Social Media</p>
      </div>
      <div className="hero-card">
        <img src={WebIcon} alt="Web Development" className="hero-card-img" />
        <p className="hero-card-text">Web Development</p>
      </div>
      <div className="hero-card">
        <img src={EmailIcon} alt="Email Marketing" className="hero-card-img" />
        <p className="hero-card-text">Email Marketing</p>
      </div>
      <div className="hero-card">
        <img src={LeadIcon} alt="Lead Generation" className="hero-card-img" />
        <p className="hero-card-text">Lead Generation</p>
      </div>
      <div className="hero-card">
        <img src={ProductIcon} alt="Product Design" className="hero-card-img" />
        <p className="hero-card-text">Product Design</p>
      </div>
      <div className="hero-card">
        <img src={SEOIcon} alt="SEO Blog Posts" className="hero-card-img" />
        <p className="hero-card-text">SEO Blog Posts</p>
      </div>
    </div>
  );
};

export default HeroCard;
