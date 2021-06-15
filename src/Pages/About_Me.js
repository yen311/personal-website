import React from "react";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import AboutContent from "../components/About_Me/AboutContent";
function About_Me() {
  return (
    <div>
      <AboutContent />
      <Image />
      <About />
      <Footer />
    </div>
  );
}

export default About_Me;
