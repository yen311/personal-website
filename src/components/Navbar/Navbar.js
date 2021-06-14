import React, { useState } from "react";
import NavItem from "./NavItem";
import "./Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
  };
  const closeHamburger = () => {
    setNavOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavItem className="logo" close={closeHamburger}>
            Yen Kuo
          </NavItem>
          <ul className={navOpen ? "nav-menu open" : "nav-menu"}>
            <NavItem close={closeHamburger}>About Me</NavItem>
            <NavItem close={closeHamburger}>Resume</NavItem>
            <NavItem close={closeHamburger}>Portfolio</NavItem>
            <NavItem close={closeHamburger}>Contact</NavItem>
          </ul>
          <div className="menu-icon" onClick={navOpenHandler}>
            <i className={navOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
