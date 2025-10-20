import React, { useEffect, useState } from "react";
import Events from "../components/home/Events";
import Experience from "../components/home/Experience";
import OurMenu from "../components/home/OurMenu";
import OurStory from "../components/home/OurStory";

export default function Home() {
  const heroImages = [
    "/images/hero.jpg",
    "/images/our_Experience.jpeg",
    "/images/our_menu.jpeg",
    "/images/event_1.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="home-hero">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index}`}
            className={`hero-bg ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Center Logo */}
        <div className="hero-logo">
          <img
            src="/images/Primary Logo_White.svg"
            alt="Sea Breeze Logo"
            className="hero-Primary"
          />
        </div>
      </div>

      {/* Other Sections */}
      <OurStory />
      <OurMenu />
      <Events />
      <Experience />
    </div>
  );
}
