import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="wave-header">
      {/* Wave background as SVG */}
      <svg className="wave-bg" viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path
          fill="#192b77"
          d="M0,64 C240,110 360,18 720,64 C1080,110 1200,18 1440,64 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="header-container">
        {/* Left Logo */}
        <div className="logo">
          <img src="/images/logo-text.png" alt="Sea Breeze" />
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
            MENU
          </NavLink>
          <NavLink to="/atmosphere" onClick={() => setMenuOpen(false)}>
            ATMOSPHERE
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </NavLink>
          <NavLink
            to="/reserve"
            onClick={() => setMenuOpen(false)}
            className="reserve-fish"
          >
            RESERVE
          </NavLink>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
