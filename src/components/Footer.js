import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section text-white position-relative">
      {/* Wave Top */}
      {/* <div className="footer-wave">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-100"
        >
          <path
            d="M0,40 C300,120 900,0 1200,80 L1200,0 L0,0 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div> */}

      {/* Black Overlay */}
      <div className="footer-overlay"></div>

      {/* Footer Content */}
      <div className="container py-5 position-relative">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-6 col-lg-3">
            <h2 className="footer-logo mb-3">Sea Breeze</h2>
            <p className="footer-text">
              Food is the foundation of happiness. We serve only the freshest
              catches from the ocean. Freshness is our mission, and quality is
              our commitment.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-md-6 col-lg-3">
            <h5 className="footer-heading mb-3">LOCATION</h5>
            <p className="mb-1">Upper Level</p>
            <p className="mb-1">Shop 15, 5 Macquarie Street</p>
            <p className="mb-1">East Circular Quay, Sydney NSW 2000</p>
            <p className="fw-semibold mt-2">Phone: +34 12345678</p>
            <a href="#" className="footer-link mt-2 d-inline-block">
              VIEW ON MAP
            </a>
          </div>

          {/* Opening Hours */}
          <div className="col-md-6 col-lg-3">
            <h5 className="footer-heading mb-3">OPENING HOURS</h5>
            <p className="mb-2">
              <strong>LUNCH</strong> <br />
              Saturday & Sunday <br />
              12:00pm – 1:30pm
            </p>
            <p className="mb-2">
              <strong>DINNER</strong> <br />
              Thursday to Sunday <br />
              6:00pm – 9:00pm
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-3">
            <h5 className="footer-heading mb-3">CONTACT</h5>
            <div className="d-grid gap-2">
              <button className="footer-btn btn-outline">EMAIL US</button>
              <button className="footer-btn btn-outline">
                PHONE: +34 12345678
              </button>
              <button className="footer-btn btn-filled">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-5 pt-4 border-top border-light-subtle">
          <p className="mb-2 small">
            © 2025 Sea Breeze Beach House. All Rights Reserved.
          </p>
          <div className="footer-links d-flex justify-content-center gap-4 flex-wrap">
            <a href="#">ABOUT</a>
            <a href="#">RESERVATION</a>
            <a href="/contact">CONTACT</a>
            <a href="#">PRIVACY</a>
            <a href="#">POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
