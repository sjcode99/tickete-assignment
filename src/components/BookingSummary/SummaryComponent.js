import React from "react";
import RatingStar from "../../utils/rating-star.svg";
import Ticket from "../../utils/ticket.svg";
import Calendar from "../../utils/calendar-blank.svg";
import Clock from "../../utils/clock.svg";
import Users from "../../utils/users.svg";
import Info from "../../utils/info.svg";
import Add from "../../utils/add.svg";
import PiggyBank from "../../utils/piggybank.svg";
import Lock from "../../utils/lock.svg";
import CarouselComponent from "../Carousel/CarouselComponent";
import "./Summary.css";

const SummaryComponent = () => {
  return (
    <>
      <h1 className="text-pay-head d-block d-md-none d-lg-none">
        Confirm & pay
      </h1>

      <div className="right-content">
        <div>
          <div style={{ padding: "1.6rem" }}>
            {/* gallery */}
            <div className="carousel-container">
              <CarouselComponent />
            </div>

            <div>
              <div>
                <div>
                  <span>
                    {" "}
                    <img src={RatingStar} alt="star-rating" />{" "}
                  </span>
                  <strong>4.9</strong>
                  <span>(4.5k) &#x2022; &lt;category&gt;</span>
                </div>
                <p className="font-weight-bold mb-4">
                  Amsterdam open boat canal cruise - Live Guiye - from Anne
                  Frank Housef
                </p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="mr-2">
                  <img src={Ticket} alt="ticket" />
                </span>
                <span className="font-weight-bold ">
                  &lt;ticket type - variant&gt;
                </span>
              </div>

              <div className="d-flex  mb-3">
                <span className="mr-2">
                  <img src={Calendar} alt="calendar" />
                </span>
                <div>
                  <p className="font-weight-bold mb-2">
                    &lt;day&gt;, &lt;month&gt; &lt;date&gt;
                  </p>
                  <span>Duration: &lt;duration&gt;</span>
                </div>
              </div>

              <div className="d-flex  mb-3">
                <span className="mr-2">
                  <img src={Clock} alt="clock" />
                </span>
                <div>
                  <p className="mb-2 font-weight-bold">&lt;time&gt;</p>
                  <span>Operating hours: &lt;time&gt; to &lt;time&gt;</span>
                </div>
              </div>

              <div className="d-flex ">
                <span className="mr-2 ">
                  <img src={Users} alt="guests" />
                </span>
                <span className="font-weight-bold">5 guests</span>
              </div>
            </div>
          </div>

          {/* <hr /> */}

          {/* view payment summary */}
          <div
            style={{
              padding: "1rem 1.6rem",
              borderTop: "1px dashed black",
              borderBottom: "1px solid black",
            }}
          >
            <div className="d-flex  justify-content-between">
              <p className="mb-0 pointer">View payment summary</p>
              <div>
                <img src={Add} alt="" srcset="" />
              </div>
            </div>
          </div>

          {/* total payable footer section */}
          <div style={{ padding: "1rem 1.6rem" }}>
            <div>
              <div>
                <div
                  className="mb-2"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 className="text-dark">Total payable</h4>
                  <h4 className="text-dark">$XXX</h4>
                </div>
                <p className="savings">
                  <img src={PiggyBank} alt="piggy-bank" />
                  <span>You saved &lt;price&gt;</span>
                </p>
              </div>
              <div className="charges">
                <span>You will be charged in AED</span>
                <img src={Info} alt="information" />
              </div>
            </div>

            {/* <div> */}
            <p className="mt-4" style={{ fontSize: "14px" }}>
              By clicking “confirm & pay”, you agree to{" "}
              <a href="#">Tickete’s general terms and conditions </a> and{" "}
              <a href="">cancellation policy.</a>
            </p>
            <button className="pay-btn">
              <img src={Lock} alt="lock" className="mr-2" />
              <span>Confirm & pay</span>
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryComponent;
