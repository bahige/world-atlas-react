import React from "react";
import Earth from "../../assets/earth.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Whatsapp from "../../assets/whatsapp.png";
import "./header.css";

const header = () => {
  let headercontent = (
    <div id="header">
      <div id="logo">
        <img src={Earth} alt="earth"></img>
        <span> World Atlas</span>
      </div>
      <div id="social-media">
        <img src={Facebook} alt="facebook"></img>
        <img src={Instagram} alt="instagram"></img>
        <img src={Linkedin} alt="linkedin"></img>
        <img src={Twitter} alt="twitter"></img>
        <img src={Whatsapp} alt="whatsapp"></img>
      </div>
    </div>
  );

  return headercontent;
};

export default header;
