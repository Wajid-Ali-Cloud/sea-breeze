import React from "react";
// import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import VisibilitySensor from "react-visibility-sensor";

function Experience() {
  return (
    <div>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 col-12 p-5 text-column">
            <div className="card-body m-5 mob-m-5">
              <p
                className="sub-p"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                {/* <b> */}
                Fabulous taste journey
                {/* </b> */}
              </p>
              <h2
                className="card-title sub-h py-3"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                Experience
              </h2>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Simple and balanced. Alexander Petillo brings together flavors
                and specialties from Italy and beyond to create his own culinary
                world, full of surprising artistry.
              </p>
              <p
                className="card-text"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <b>
                  “I traveled all over the world, feeling and learning the
                  authenticity of each local speciality food. I benefit a lot
                  from working with other chefs and restaurants. In Japan, in
                  Thailand, in Sweden, in Mexico, and elsewhere, chefs have
                  different philosophies and ways of handling ingredients.”
                </b>
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
          <div
            className="col-md-6 col-12 experience-image-bg-1 experience-image-column"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
