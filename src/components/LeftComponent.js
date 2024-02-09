import React from "react";
import Info from "../utils/info.svg";
import Card from "../utils/card.svg";
import Radio from "../utils/radio.svg";
import Visa from "../utils/visa.svg";
import MasterCard from "../utils/mastercard.svg";
import DinerClub from "../utils/diners-club.svg";
import PiggyBank from "../utils/piggybank.svg";
import Lock from "../utils/lock.svg";
import ApplePay from '../utils/apple-pay-mono.svg'

const LeftComponent = () => {
  return (
    <div className="left-content">
      {/* confirm and pay */}
      <div className="head">
        <h1 className="text-pay-head">Confirm & pay</h1>
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
              <div
                className="input-form-css col"
                style={{ margin: "1.25rem 0" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" />
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

        <hr />
      </div>

      {/*  additional information */}
      <div className="details-container">
        <h4 id="text-general">Additional information</h4>
        <p>We need a few more details to complete your reservation.</p>

        <div className="details-form">
          <form>
            <div className="row" style={{ display: "flex" }}>
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ margin: "1.25rem 0" }}>
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
              <p style={{ margin: 0 }}>Credit & debit card</p>
            </div>
            <div>
              <img src={Radio} alt="radio-button" />
            </div>
          </div>

          {/* logos */}
          <div>
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
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h4>
                  Total payable: <span>$XXX</span>
                </h4>
                <div style={{display: 'flex', backgroundColor: 'lightgreen', color: 'white'}}>
                  <img src={PiggyBank} alt="piggy-bank" />
                  <p>You save price</p>
                </div>
              </div>

              <p>
                You will be charged in AED{" "}
                <span>
                  <img src={Info} alt="side-info" />
                </span>
              </p>

              {/* confirm and pay button */}
              <div>
                <p>
                  By clicking “confirm & pay”, you agree to Tickete’s general
                  terms and conditions and cancellation policy.
                </p>

                <button style={{
                  width: "23%",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "17px",
                  backgroundColor: "black",
                  color: 'white',
                }}>
                  <img src={Lock} alt="lock-button" />
                  Confirm & pay
                </button>
              </div>
            </div>
          </div>
        </div>
          
          {/* payment method 2 */}
        <div style={{border: '1px solid black', margin: '37px 0', borderRadius: '1rem', padding: '1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', width: '8rem', justifyContent: 'space-between'}}>
              <span>
                <img src={ApplePay} alt="Apple-pay" />
              </span>
              <p style={{marginBottom: 0}}>Coming soon</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>

        {/* payment method 3 */}
        <div style={{border: '1px solid black', margin: '37px 0', borderRadius: '1rem', padding: '1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', width: '8rem', justifyContent: 'space-between'}}>
              <span>
                <img src={ApplePay} alt="Apple-pay" />
              </span>
              <p style={{marginBottom: 0}}>Coming soon</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h3>Total Payable: <span>$XXX</span> </h3>
          <div style={{border: '1px solid', borderRadius: '1rem', display: 'flex', padding: '1rem 1.25rem 1rem 1rem', justifyContent: 'space-between'}}>
            <span>
              <img src={Info} alt="information" />
              </span>
            <div style={{width: '52rem'}}>
              <p style={{marginBottom: 0}}>You will be charged in AED</p>
              <p>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
