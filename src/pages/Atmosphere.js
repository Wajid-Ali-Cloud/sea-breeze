import React from "react";
import "./Atmosphere.css";

export default function Atmosphere() {
  const atmosphereImages = [
    "/images/hero.jpg",
    "/images/hero.jpg",
    "/images/hero.jpg",
    "/images/hero.jpg",
    "/images/hero.jpg",
  ];

  return (
    <div className="atmosphere-page">
      {/* Top wave */}
      <svg
        className="wave-top"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#192b77"
          d="M0,64 C240,110 360,18 720,64 C1080,110 1200,18 1440,64 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Content */}
      <div className="container text-center">
        <div className="scroll-wrapper">
          <div className="scroll-container d-flex flex-nowrap">
            {atmosphereImages.map((img, i) => (
              <div className="scroll-item" key={i}>
                <img src={img} alt={`Atmosphere ${i}`} className="atmo-img" />
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-5 chill-text">Feel our chill atmosphere!</h2>
      </div>

      {/* Bottom wave */}
      <div className="bottom-wave-section">
        <svg
          className="wave-bottom"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#b9d9ff"
            d="M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
