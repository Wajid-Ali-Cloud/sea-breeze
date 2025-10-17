import React from "react";
import "./Atmosphere.css";

export default function Atmosphere() {
  const atmosphereImages = [
    "/images/food/salad.jpg",
    "/images/food/Pizzas.jpg",
    "/images/food/Desserts.jpg",
    "/images/food/Pastas.jpg",
    "/images/food/Specialties.jpg",
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
          className="wave-top"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
}
