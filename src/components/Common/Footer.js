import React from "react";
import FooterIcon from "./FooterIcon";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <FooterIcon></FooterIcon>
      <div>
        <p className="copyright">
          <i className="far fa-copyright"></i>
          Yen_Kuo
          <a
            className="copyright-email"
            href="yen311.github.io/personal-website/"
          >
            yen311.github.io/personal-website/
          </a>
        </p>
      </div>
    </div>
  );
}

export default footer;
