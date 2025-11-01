import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="top-section">
        {/* Hamburger Menu */}
        <div
          className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src="/assets/logo.png" alt="MyStore Logo" className="logo-img" />
        <h1 className="logo-text">LOGO</h1>
        <img src="/assets/icons.png" alt="Icons" className="icons-img" />
      </div>

      {/* Navigation */}
      <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
