import React, { useState } from "react";
import "../Styles/Navbar.css";
import icon from "../Styles/share.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={icon} alt="SpaceX" />
      </div>
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Falcon 9</li>
          <li>Dragon</li>
          <li>Falcon Heavy</li>
          <li>Starship</li>
          <li>Human Spaceship</li>
          <li>Rideshare</li>
          <li>Starlink</li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
