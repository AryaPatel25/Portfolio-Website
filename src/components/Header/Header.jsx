import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./Header.css";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },  // remove if you don't have this page
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
  };

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
                  key={item.name}
                  className={`nav-item ${location.pathname === item.path ? "nav-item-active" : ""}`}
                  onClick={() => handleClick(item.path)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </nav>

          <button
            className="contact-button"
            onClick={() => handleClick("/contact")}
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
