import React from "react";
import HomeContent from "../components/Home/HomeContent";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";

function Home() {
  return (
    <div>
      <HomeContent />
      <Image />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
