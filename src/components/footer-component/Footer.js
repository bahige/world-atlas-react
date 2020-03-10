import React from "react";
import Earth from "../../assets/earth.png";
import "./footer.css";

const footer = () => {
  let footer = (
    <div id="footer">
      <div id="footer-logo">
        <img src={Earth} alt="earth"></img>
        <span> World Atlas</span>
      </div>
      <div id="list">
        <div className="item">Advertise With Us </div>
        <div className="item">Contact Us </div>
        <div className="item">Privacy Policy </div>
        <div className="item">About Us </div>
      </div>
    </div>
  );

  return footer;
};

export default footer;
