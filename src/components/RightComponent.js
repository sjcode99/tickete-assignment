import React from "react";
import RatingStar from "../utils/rating-star.svg";
import Ticket from "../utils/ticket.svg";
import Calendar from "../utils/calendar-blank.svg";
import Clock from "../utils/clock.svg";
import Users from "../utils/users.svg";
import Info from "../utils/info.svg";
import PiggyBank from "../utils/piggybank.svg";
import Lock from "../utils/lock.svg";

const RightComponent = () => {
  return (
    <div className="right-content">
      <div>
        <div style={{ padding: "1.6rem" }}>
          {/* gallery */}
          <div>
            <img />
          </div>

          <div>
            <div>
              <div>
                <span>
                  {" "}
                  <img src={RatingStar} alt="star-rating" />{" "}
                </span>
                <span>4.9</span>
                <span>(4.5k) &#x2022; &lt;category&gt;</span>
              </div>
              <p>
                Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
                Housef
              </p>
            </div>

            <div>
              <span>
                <img src={Ticket} alt="ticket" />
              </span>
              <span>&lt;ticket type - variant&gt;</span>
            </div>

            <div style={{ display: "flex" }}>
              <span>
                <img src={Calendar} alt="calendar" />
              </span>
              <div>
                <p>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</p>
                <span>Duration: &lt;duration&gt;</span>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <span>
                <img src={Clock} alt="clock" />
              </span>
              <div>
                <p>&lt;time&gt;</p>
                <span>Operating hours: &lt;time&gt; to &lt;time&gt;</span>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <span>
                <img src={Users} alt="guests" />
              </span>
              <span>5 guests</span>
            </div>
          </div>
        </div>

        <hr />

        {/* view payment summary */}
        <div style={{ padding: "1rem 1.6rem", borderTop: '1px dashed black', borderBottom: '1px solid black' }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="#">View payment summary</a>
            <button>+</button>
          </div>
        </div>

        {/* total payable footer section */}
        <div style={{ padding: "1rem 1.6rem" }}>
          <div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Total payable</p>
                <p>$XXX</p>
              </div>
              <p
                style={{
                  backgroundColor: "lightgreen",
                  width: "45%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                }}
              >
                <img src={PiggyBank} alt="piggy-bank" />
                <span>You saved &lt;price&gt;</span>
              </p>
            </div>
            <div>
              <p>
                <a href="#">You will be charged in AED</a>
                <img src={Info} alt="information" />
              </p>
            </div>
          </div>

          <div>
            <p>
              By clicking “confirm & pay”, you agree to Tickete’s general terms
              and conditions and cancellation policy.
            </p>
            <div style={{ margin: "1.2rem 0" }}>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "black",
                  color: 'white',
                }}
              >
                <img src={Lock} alt="lock" />
                Confirm & pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
