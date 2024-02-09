import React from "react";
import ChatWithUs from "../utils/chat-with-us.svg";
import Close from "../utils/close.svg";
import Add from "../utils/add.svg";
const FaqComponent = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="faq-container">
          <p>Frequently Asked Questions</p>
          <p>Here are some of our most asked questions. </p>
          <div className="chat-with-us">
            <div className="row">
              <div className="col-6">
                <span>Still need help?</span>
                <p>We’re here for you. </p>
                <button>chat with us</button>
              </div>
              <div className="col-6">
                <img src={ChatWithUs} alt="chat with us" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="questions">
          <div className="question-item">
            <p>
              <span>
                <img src={Add} alt="" srcset="" />
              </span>
              <span>What should I do on my first trip to Rome?</span>
            </p>
          </div>
          <div className="question-item">
            <p>
              <span>
                <img src={Close} alt="" srcset="" />
              </span>
              <span>What are some hidden gems to see in Rome?</span>
            </p>
            <p>
              Rome is packed with hidden gems. If you love art, don't miss the
              Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
              is a free museum and well worth a quick visit. If you love the
              ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
              the Domus Aurea, and the Baths of Caracalla. For even more hidden
              gems, take a tour of Trastevere, a fascinating neighborhood full
              of history and ambiance.
            </p>
          </div>
          <div className="question-item">
            <p>
              <span>
                <img src={Add} alt="" srcset="" />
              </span>
              <span>How much time should I spend in Rome?</span>
            </p>
          </div>
          <div className="question-item">
            <p>
              <span>
                <img src={Add} alt="" srcset="" />
              </span>
              <span>What food is Rome known for?</span>
            </p>
          </div>
          <div className="question-item">
            <p>
              <span>
                <img src={Add} alt="" srcset="" />
              </span>
              <span>What is the best way to get around Rome?</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
