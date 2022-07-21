import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function FooterIcon() {
  return (
    <div className='icon'>
      <a href='https://www.facebook.com/profile.php?id=100001234828807'>
        <FaFacebookSquare className='iconitem' />
      </a>
      <a href='https://www.instagram.com/kuoyen311/'>
        <FaInstagram className='iconitem' />
      </a>
      <a href='https://github.com/yen311'>
        <FaGithubSquare className='iconitem' />
      </a>
      <a href='https://www.linkedin.com/in/yen-kuo/'>
        <FaLinkedin className='iconitem' />
      </a>
      <a href='mailto:kuoyen5@gmail.com'>
        <FaEnvelope className='iconitem' />
      </a>
    </div>
  );
}

export default FooterIcon;
