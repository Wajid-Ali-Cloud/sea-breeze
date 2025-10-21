import React from "react";
// import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import VisibilitySensor from "react-visibility-sensor";

function OurStory() {
  return (
    <div>
      <div className="card">
        <div className="row g-0">
          <div
            className="col-md-6 our-story-image-bg-1"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          ></div>
          <div className="col-md-6 p-5">
            <div className="card-body m-5 mob-m-5">
              <p
                className="sub-p"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                {/* <b> */}
                About PatioTime Seafood
                {/* </b> */}
              </p>
              <h2
                className="card-title sub-h py-3"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                Our Story
              </h2>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Food is the foundation of true happiness. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit aenean commodo.
              </p>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                {/* <b> */}
                We see our customers as invited guests to a party, and we are
                the hosts. It’s our job every day to make every important aspect
                of the customer experience a little bit better. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu integer tincidunt cras
                dapibus.
                {/* </b> */}
              </p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
