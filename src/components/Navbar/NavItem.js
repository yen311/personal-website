import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function NavItem(props) {
  return (
    <li className="nav-item">
      <NavLink
        activeClassName="active"
        className={`nav-links ${props.className}`}
        to={
          props.children === "Yen Kuo"
            ? "/home"
            : `/${props.children.toLowerCase()}`
        }
        onClick={props.close}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;
