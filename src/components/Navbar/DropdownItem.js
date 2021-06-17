import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.css";

const dropItem = [
  {
    title: "WTFood",
    path: "/contact",
    cName: "dropdown-link",
  },
  {
    title: "OurCulture",
    path: "/OurCulture",
    cName: "dropdown-link",
  },
  {
    title: "Metro",
    path: "/Metro",
    cName: "dropdown-link",
  },
];
function DropdownItem() {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  return (
    <ul className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
      {dropItem.map((item, key) => {
        return (
          <li key={key} onClick={clickHandler}>
            <Link className={item.cName} to={item.path}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownItem;
