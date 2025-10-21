import React from "react";
// import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import VisibilitySensor from "react-visibility-sensor";

function Events() {
  return (
    <div>
      <div className="card">
        <div className="row g-0">
          <div
            className="col-md-6 col-12 event-image-bg-1 event-image-column"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          ></div>
          <div className="col-md-6 col-12 p-5 text-column">
            <div className="card-body m-5 mob-m-5">
              <p
                className="sub-p"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                {/* <b> */}
                An Ideal Private Event Venue
                {/* </b> */}
              </p>
              <h2
                className="card-title sub-h py-3"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                Events & Functions
              </h2>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Patio Time is the perfect place for your next event or function.
                Celebrate at one of Australia’s most awarded restaurants.
                Whether it’s a cocktail party, intimate wedding, corporate
                event, sit down lunch or dinner we can accommodate all your
                function needs.
              </p>
              <ul
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <li>Private Dinning Room</li>
                <li>Functions Package</li>
                <li>Beverage Package</li>
              </ul>
              {/* <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <b>
                  In addition to this, you can place purchase orders for any
                  required, and allowed equipment that your employees may
                  require. We get all kinds of requests from coffee machines to
                  server racks and even electric scooters for those that take
                  the subway to work. Some employers have add-ons such as bonus
                  structure, insurance packages and even serviced vehicles. Sky
                  is the limit with us.
                </b>
              </p> */}
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  See Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
