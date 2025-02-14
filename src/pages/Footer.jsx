import React from "react";
import "./footer.css";
import FooterColOne from "../components/FooterColOne";
import FooterColTwo from "../components/FooterColTwo";
function Footer() {
  return (
    <div className="footer">
      <div className="lineUp"></div>
      <img src="../movie-website/assets/footer-bg.jpeg" alt="" />
      <div className="items">
        <FooterColOne />
        <FooterColTwo />
      </div>
      <div className="lineDown"></div>
    </div>
  );
}

export default Footer;
