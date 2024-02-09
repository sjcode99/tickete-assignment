import React from "react";
import TicketeLogo from "../utils/download.svg";

const FooterComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "2rem 0",
      }}
    >
      <div style={{ padding: "2rem 6rem" }}>
        <img src={TicketeLogo} alt="Tickete Logo" />
      </div>
      <p style={{border: '1px solid'}}></p>
      <div className="footer-links">
        <span>Made with ❤️</span>
        <span>&#x2022;</span>
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
      </div>
    </div>
  );
};

export default FooterComponent;
