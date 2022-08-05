import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.css";

function DropdownItem({ projects }) {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  return (
    <ul className={click ? "_dropdown-menu clicked" : "_dropdown-menu"}>
      {projects.map((item, key) => {
        return (
          <li key={key} onClick={clickHandler}>
            <Link className='dropdown-link' to={`/portfolio${item.path}`}>
              {item.dropdownName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownItem;
