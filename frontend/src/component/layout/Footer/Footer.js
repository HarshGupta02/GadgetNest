import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/amazonn.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src = {logo} alt = "logo" />
        <p>High Quality is our first priority</p>
        <p>Copyrights 2021 &copy; HarshGupta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/fake_harshgupta/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCsDigKWIFw084lQ8767XqyA">Youtube</a>
        <a href="https://www.linkedin.com/in/harsh-gupta-37b5a2201/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;