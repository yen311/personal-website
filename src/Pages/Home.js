import React from "react";
import HomeContent from "../components/Home/HomeContent";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HomeContent />
      <Image />
      <About pages="personal-website" />
      <Footer />
    </motion.div>
  );
}

export default Home;
