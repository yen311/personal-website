import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavItem(props) {
  return (
    <li className="nav-item">
      <Link
        className={`nav-links ${props.className}`}
        to={
          props.children === "Yen Kuo"
            ? "personal-website"
            : `${props.children.toLowerCase()}`
        }
        onClick={props.close}
      >
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;
