import React from "react";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="icon">
        <a href="https://www.facebook.com/profile.php?id=100001234828807">
          <i className="fab fa-facebook-square iconitem"></i>
        </a>
        <a href="https://www.instagram.com/kuoyen311/">
          <i className="fab fa-instagram iconitem"></i>
        </a>
        <a href="https://github.com/yen311">
          <i className="fab fa-github-square iconitem"></i>
        </a>
        <a href="https://www.linkedin.com/in/yen-kuo/">
          <i className="fab fa-linkedin iconitem"></i>
        </a>
        <a href="mailto:kuoyen5@gmail.com">
          <i className="fas fa-envelope-square iconitem"></i>
        </a>
      </div>
      <div>
        <p className="copyright">
          <i class="far fa-copyright"></i>
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
