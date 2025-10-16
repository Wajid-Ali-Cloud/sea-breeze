import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      {/* Background image */}
      <div className="home-hero">
        <img
          src="/images/hero.jpg"
          alt="Ocean background"
          className="hero-bg"
        />

        {/* Centered logo badge */}
        <div className="hero-logo">
          <img src="/images/sea-breeze-badge.png" alt="Sea Breeze Badge" />
        </div>
      </div>
    </div>
  );
}
