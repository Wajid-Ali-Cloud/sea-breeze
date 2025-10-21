import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const categories = [
    { title: "Salads", img: "/images/food/salad.jpg" },
    { title: "Specialties", img: "/images/food/Specialties.jpg" },
    { title: "To share", img: "/images/food/salad.jpg" },
    { title: "Tapas", img: "/images/food/Pizzas.jpg" },
    { title: "Paellas", img: "/images/food/Paellas.jpg" },
    { title: "Fish", img: "/images/food/fish.jpg" },
    { title: "Meat", img: "/images/food/Soups.jpg" },
    { title: "Pastas", img: "/images/food/Pastas.jpg" },
    { title: "Pizzas", img: "/images/food/Pizzas.jpg" },
    { title: "Burgers", img: "/images/food/Burgers.jpg" },
    { title: "Soups", img: "/images/food/Soups.jpg" },
    { title: "Desserts", img: "/images/food/Desserts.jpg" },
  ];

  return (
    <div className="menu-page">
      {/* Top Wave */}
      {/* <svg
        className="wave-top"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#192b77"
          d="M0,64 C240,110 360,18 720,64 C1080,110 1200,18 1440,64 L1440,0 L0,0 Z"
        />
      </svg> */}

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
        {/* Top wave */}
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

        {/* Content */}
        <div className="bottom-content text-center">
          <h2>Find the whole menu here:</h2>
          <NavLink
            to="/menu"
            className="reserve-fish-blue"
            style={{
              backgroundImage: `url("/images/Blue-fish.svg")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              
            }}
          >
            Menu
          </NavLink>
        </div>
      </div>
    </div>
  );
}
