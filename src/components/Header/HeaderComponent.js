import React from "react";
import Logo from "../../utils/tickete-Logo.svg";
import Lock from "../../utils/lock.svg";
import Help from "../../utils/help.svg";
import ArrowLeft from "../../utils/arrow-left.svg"
import "./Header.css";

const HeaderComponent = () => {
  return (
    <div className="nav-header">
      <img className="d-none d-md-block d-lg-block" src={Logo} alt="tickete-Logo" />
      <img className="d-block d-md-none d-lg-none" src={ArrowLeft} alt="" />
      <div className="header-btn">
        <img src={Lock} alt="checkout-Logo" />
        <span>Checkout</span>
      </div>
      <div className="header-btn">
        <img src={Help} alt="help-Logo" />
        <span className="d-none d-md-block d-lg-block">Help</span>
      </div>
    </div>
  );
};

export default HeaderComponent;
