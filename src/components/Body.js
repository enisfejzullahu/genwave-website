// src/components/Body.js
import React from "react";
import "../styles/Body.css"; // Import the CSS file for styling
import stars from "../images/stars1.svg";
import photos from "../images/photos.png"

const Body = () => {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <div className="top-part">
        <img src={stars} alt="Top Visual" />
        <p>CREATIVE EXCELLENCE, TAILORED FOR YOUR BRAND</p>
      </div>
      <h1 className="large-text">
        <span className="gradient-text">Design</span> & Digital Marketing <br />
        starting at only <span className="gradient-text">$249/mo</span>
      </h1>
      <div className="buy-or-book">
        <button className="buy-button">Buy now</button>
        <p className="demo-link">or Book a Demo</p>
      </div>
      <div className="group-photos">
        <img src={photos} alt="Group of photos"></img>
      </div>
    </main>
  );
};

export default Body;
