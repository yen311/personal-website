import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link, NavLink } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import "./Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const mouseEnter = () => {
    if (window.innerWidth < 950) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const mouseLeave = () => {
    setDropdown(false);
  };

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
            <li
              className="nav-item"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <NavLink
                activeClassName="active"
                className="nav-links"
                onClick={closeHamburger}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              {dropdown && <DropdownItem />}
            </li>
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
