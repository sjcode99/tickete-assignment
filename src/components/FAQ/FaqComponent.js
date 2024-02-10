import React from "react";
import ChatWithUs from "../../utils/chat-with-us.svg";
import Close from "../../utils/close.svg";
import Add from "../../utils/add.svg";
import "./Faq.css";

const FaqComponent = () => {
  return (
    <>
      <p className="d-block d-md-none d-lg-none font-weight-bold text-dark">Frequently Asked Questions</p>
      <p className="d-block d-md-none d-lg-none ">
        Here are some of our most asked questions.{" "}
      </p>

      <div className="row faq">
        <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
          <div className="faq-container">
            <p className="d-none d-md-block d-lg-block">
              Frequently Asked Questions
            </p>
            <p className="d-none d-md-block d-lg-block">
              Here are some of our most asked questions.{" "}
            </p>
            <div className="chat-with-us mt-4">
              <div className="row">
                <div className="col-6">
                  <p>Still need help?</p>
                  <p>We’re here for you. </p>
                  <button className="mt-3">chat with us</button>
                </div>
                <div className="col-6">
                  <img src={ChatWithUs} alt="chat with us" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
          <div className="questions">
            <div className="question-item">
              <p>
                <span className="mr-3">
                  <img src={Add} alt="" srcset="" />
                </span>
                <span className="text-dark">
                  What should I do on my first trip to Rome?
                </span>
              </p>
            </div>
            <div className="question-item">
              <p>
                <span className="mr-3">
                  <img src={Close} alt="" srcset="" />
                </span>
                <span className="text-dark">
                  What are some hidden gems to see in Rome?
                </span>
              </p>
              <p className="ml-4">
                Rome is packed with hidden gems. If you love art, don't miss the
                Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
                is a free museum and well worth a quick visit. If you love the
                ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
                the Domus Aurea, and the Baths of Caracalla. For even more
                hidden gems, take a tour of Trastevere, a fascinating
                neighborhood full of history and ambiance.
              </p>
            </div>
            <div className="question-item">
              <p>
                <span className="mr-3">
                  <img src={Add} alt="" srcset="" />
                </span>
                <span className="text-dark">
                  How much time should I spend in Rome?
                </span>
              </p>
            </div>
            <div className="question-item">
              <p>
                <span className="mr-3">
                  <img src={Add} alt="" srcset="" />
                </span>
                <span className="text-dark">What food is Rome known for?</span>
              </p>
            </div>
            <div className="question-item">
              <p>
                <span className="mr-3">
                  <img src={Add} alt="" srcset="" />
                </span>
                <span className="text-dark">
                  What is the best way to get around Rome?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
