import React from "react";
import Info from "../../utils/info.svg";
import Card from "../../utils/card.svg";
import Radio from "../../utils/radio.svg";
import Visa from "../../utils/visa.svg";
import MasterCard from "../../utils/mastercard.svg";
import DinerClub from "../../utils/diners-club.svg";
import PiggyBank from "../../utils/piggybank.svg";
import Lock from "../../utils/lock.svg";
import ApplePay from "../../utils/apple-pay-mono.svg";
import "./Booking.css";

const BookingComponent = () => {
  return (
    <div className="left-content">
      {/* confirm and pay */}
      <div className="head">
        <h1 className="text-pay-head d-none d-md-block d-lg-block">Confirm & pay</h1>
        <div className="section-message">
          <div>
            <p className="message-title">Free Cancellation</p>
            <p className="message-description m-0">
              Tickets can be cancelled by 13th December, 2022.
            </p>
          </div>
          <a>
            <img src={Info} alt="message-info" />{" "}
          </a>
        </div>
      </div>

      {/*  details */}
      <div className="details-container">
        <h4 id="text-general">Enter your details</h4>
        <p>
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>

        <div className="details-form">
          <form>
            <div className="row">
              <div className="input-form-css col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-form-css col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="email"
                  placeholder="Confirm Email"
                  required="true"
                  className="form-control"
                />
              </div>
            </div>
            {/* <div className="style-form-control my-6 col-6">
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <input type="text" className="form-control" />
            </div> */}
          </form>
        </div>
      </div>
      <hr />

      {/*  additional information */}
      <div className="details-container">
        <h4 id="text-general">Additional information</h4>
        <p>We need a few more details to complete your reservation.</p>

        <div className="details-form">
          <form>
            <div className="row" style={{ display: "flex" }}>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="text"
                  required
                  placeholder="Input Label"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <select className="form-control">
                  <option selected>Select</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <select className="form-control">
                  <option selected>Multiselect</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <hr />
      </div>

      {/* mode of payment */}
      <div className="details-container">
        <h4 id="text-general">Select your mode of payment</h4>
        <p>Payments with Tickete are secure and encrypted.</p>

        <div className="payment-method1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={Card} alt="creditc-card-logo" />
              <p
                className="m-0 font-weight-bold ml-2"
                style={{ color: "#000" }}
              >
                Credit & debit card
              </p>
            </div>
            <div>
              <img src={Radio} alt="radio-button" />
            </div>
          </div>

          {/* logos */}
          <div className="mt-4 mb-4">
            <span>
              <img src={Visa} alt="Visa" />
            </span>
            <span>
              <img src={MasterCard} alt="Mastercard" />
            </span>
            <span>
              <img src={DinerClub} alt="Diner-Club" />
            </span>
          </div>

          <div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="text"
                  placeholder="Name on card"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="text"
                  placeholder="Expiry date"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="text"
                  placeholder="<CVV/CVC>"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div>
              <div className=" total-pay  "
        
              >
                <h4 className="text-dark">
                  Total payable: <span>$XXX</span>
                </h4>
                <p className="savings">
                  <img src={PiggyBank} alt="piggy-bank" />
                  <span>You saved &lt;price&gt;</span>
                </p>
              </div>

              <div className="charges">
                <span>You will be charged in AED</span>
                <img src={Info} alt="information" />
              </div>
              {/* confirm and pay button */}
              <p className="mt-4" style={{ fontSize: "14px" }}>
                By clicking “confirm & pay”, you agree to{" "}
                <a href="#">Tickete’s general terms and conditions </a> and{" "}
                <a href="">cancellation policy.</a>
              </p>
              <button className="cnf-pay-btn">
                <img src={Lock} alt="lock" className="mr-2" />
                <span>Confirm & pay</span>
              </button>
            </div>
          </div>
        </div>

        {/* payment method 2 */}
        <div
          className="payment-method2"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                width: "8rem",
                justifyContent: "space-between",
              }}
            >
              <span>
                <img src={ApplePay} alt="Apple-pay" />
              </span>
              <p style={{ marginBottom: 0 }}>Coming soon</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>

        {/* payment method 3 */}
        <div
          className="payment-method2"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                width: "8rem",
                justifyContent: "space-between",
              }}
            >
              <span>
                <img src={ApplePay} alt="Apple-pay" />
              </span>
              <p style={{ marginBottom: 0 }}>Coming soon</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h3 className="text-dark">
            Total Payable: <span>$XXX</span>{" "}
          </h3>
          <div className="p-3 mt-4"
            style={{
              border: "1px solid",
              borderRadius: "12px",
            }}
          >
            <p className="d-flex align-items-center mb-0" style={{fontSize: '14px'}}>
              <img className="mr-2" src={Info} alt="information" />
              <span className="mb-0 text-dark font-weight-bold">You will be charged in AED</span>
            </p>
            <p className="ml-4 mt-1" style={{fontSize:'14px'}}>
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
