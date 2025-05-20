import React from "react";
import Logo from "../../assets/Logo";
import "./Header.css";

const Header = ({ activeTab, setActiveTab }) => {
  const navItems = ["Home", "About Me", "Portfolio", "Blog"]; // no Contact Me here

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

          {/* ✅ The contact button uses setActiveTab directly */}
          <button
            className="contact-button"
            onClick={() => setActiveTab("Contact Me")}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="header-divider" />
    </div>
  );
};

export default Header;
