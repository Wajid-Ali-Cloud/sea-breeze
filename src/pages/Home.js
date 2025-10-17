import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      {/* Background image section */}
      <div className="home-hero">
        <img
          src="/images/hero.jpg"
          alt="Ocean background"
          className="hero-bg"
        />

        {/* Black overlay */}
        <div className="overlay"></div>

        {/* Centered logo badge */}
        <div className="hero-logo">
          <img
            src="/images/Primary Logo_White.svg"
            alt="Ocean background"
            className="hero-Primary"
          />
        </div>
      </div>
    </div>
  );
}
