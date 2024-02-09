import React from "react";
import Logo from "../utils/tickete-Logo.svg";
import Lock from "../utils/lock.svg";
import Help from "../utils/help.svg";

const HeaderComponent = () => {
  return (
    <div className="nav-header">
      <img src={Logo} alt="tickete-Logo" />
      <p>
        <a>
          <img src={Lock} alt="checkout-Logo" />
        </a>
        Checkout
      </p>
      <p>
        <a>
          <img src={Help} alt="help-Logo" />
        </a>
        Help
      </p>
    </div>
  );
};

export default HeaderComponent;
