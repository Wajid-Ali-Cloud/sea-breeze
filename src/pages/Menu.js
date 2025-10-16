// const categories = [
//   { title: "Salads", img: "/images/salads.jpg" },
//   { title: "Specialties", img: "/images/specialties.jpg" },
//   { title: "To share", img: "/images/toshare.jpg" },
//   { title: "Tapas", img: "/images/tapas.jpg" },
//   { title: "Paellas", img: "/images/paellas.jpg" },
//   { title: "Fish", img: "/images/fish.jpg" },
//   { title: "Meat", img: "/images/meat.jpg" },
//   { title: "Pastas", img: "/images/pastas.jpg" },
//   { title: "Pizzas", img: "/images/pizzas.jpg" },
//   { title: "Burgers", img: "/images/burgers.jpg" },
//   { title: "Soups", img: "/images/soups.jpg" },
//   { title: "Desserts", img: "/images/desserts.jpg" },
// ];

import React from "react";
import "./Menu.css";

export default function Menu() {
  const categories = [
    { title: "Salads", img: "/images/hero.jpg" },
    { title: "Specialties", img: "/images/hero.jpg" },
    { title: "To share", img: "/images/hero.jpg" },
    { title: "Tapas", img: "/images/hero.jpg" },
    { title: "Paellas", img: "/images/hero.jpg" },
    { title: "Fish", img: "/images/hero.jpg" },
    { title: "Meat", img: "/images/hero.jpg" },
    { title: "Pastas", img: "/images/hero.jpg" },
    { title: "Pizzas", img: "/images/hero.jpg" },
    { title: "Burgers", img: "/images/hero.jpg" },
    { title: "Soups", img: "/images/hero.jpg" },
    { title: "Desserts", img: "/images/hero.jpg" },
  ];

  return (
    <div className="menu-page">
      {/* Top Wave */}
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

      {/* Menu Grid Section */}
      <div className="container text-center menu-container">
        <div className="row g-4 justify-content-center">
          {categories.map((item, i) => (
            <div
              key={i}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center"
            >
              <img src={item.img} alt={item.title} className="menu-img" />
              <p className="menu-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="menu-bottom-wave">
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

        <div className="bottom-content text-center">
          <h2>Find the whole menu here:</h2>
          <button className="fish-button">MENU</button>
        </div>
      </div>
    </div>
  );
}
