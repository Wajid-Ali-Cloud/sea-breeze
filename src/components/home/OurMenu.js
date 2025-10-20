import React from "react";
// import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import VisibilitySensor from "react-visibility-sensor";

function OurMenu() {
  return (
    <div>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 p-5">
            <div className="card-body m-5 mob-m-5">
              <p
                className="sub-p"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <b>We serve freshest catches</b>
              </p>
              <h2
                className="card-title sub-h py-3"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                Our Menu
              </h2>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                The best of local produce, fish and seafood caught off the South
                West coast. Our menus change twice daily depending on what the
                fishermen have brought in to us. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu integer tincidunt cras
                dapibus.
              </p>
              {/* Menu List 3 items */}
              <ul>
                <li>Pasta</li>
                <li>Pizza</li>
                <li>Burger</li>
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
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 our-menu-image-bg-1"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
