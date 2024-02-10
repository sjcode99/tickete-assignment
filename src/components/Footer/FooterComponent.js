import React from "react";
import TicketeLogo from "../../utils/download.svg";
import './Footer.css'

const FooterComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "2rem 0",
      }}
    >
      <div className="tickete-logo-footer">
        <img src={TicketeLogo} alt="Tickete Logo" />
      </div>
      <p style={{border: '1px solid'}}></p>
      <div className="footer-links">
        <span  className="d-none d-md-inline d-lg-inline">&#x2022;</span>
        <span>
          <a href="#">Privacy policy</a> 
        </span>
        <span>&#x2022;</span>
        <span>
          <a href="#">Terms of usage</a>
        </span>
        <span>&#x2022;</span>
        <span>
          <a href="#">Cancellation policy</a>
        </span>
        <span>&#x2022;</span>
        <span>
          <a href="#">Sitemap</a>
        </span>
        <span  className="d-block d-md-flex d-lg-flex">Made with ❤️</span>

      </div>
    </div>
  );
};

export default FooterComponent;
