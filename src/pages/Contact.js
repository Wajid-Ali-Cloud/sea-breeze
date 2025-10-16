import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Decorative top wave */}
      <div className="wave-top"></div>

      <div className="contact-content">
        <h1>Contact us!</h1>

        <img
          src="/images/telephone.png"
          alt="Telephone"
          className="contact-illustration"
        />

        <div className="contact-icons">
          <div className="contact-item">
            <img
              src="/images/phone-icon.png"
              alt="Phone icon"
              className="contact-icon"
            />
            <p>+34 12345678</p>
          </div>

          <div className="contact-item">
            <img
              src="/images/instagram-icon.png"
              alt="Instagram icon"
              className="contact-icon"
            />
            <p>@seabreeze_beach_house</p>
          </div>

          <div className="contact-item">
            <img
              src="/images/map-icon.png"
              alt="Map icon"
              className="contact-icon"
            />
            <p>C/ Pescadors 87</p>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="wave-bottom"></div>
    </div>
  );
}
