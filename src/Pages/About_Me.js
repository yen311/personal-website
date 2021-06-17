import React from "react";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import AboutContent from "../components/About_Me/AboutContent";
import { AnimatePresence, motion } from "framer-motion";
function About_Me() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AboutContent />
      <Image />
      <About pages="about" />
      <Footer />
    </motion.div>
  );
}

export default About_Me;
