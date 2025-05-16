import React, { useState } from "react";
import Logo from "../../assets/Logo";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "About Me", "Portfolio", "Services", "Blog"];

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo">
          <Logo />
        </div>

        <button className="mobile-menu">
          <i className="menu-2" aria-label="Toggle menu" />
        </button>

        <div className="nav-container">
          <nav className="main-nav">
            <div className="nav-tabs">
              {navItems.map((item) => (
                <div
                  key={item}
                  className={`nav-item ${activeTab === item ? "nav-item-active" : ""}`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </nav>
          <button className="contact-button">Contact Me</button>
        </div>
      </div>
      <div className="header-divider" />
    </div>
  );
};

export default Header;
