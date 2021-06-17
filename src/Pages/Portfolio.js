import React from "react";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import { AnimatePresence, motion } from "framer-motion";

function Protfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image />
      <About pages="portfolio" />
      <Footer />
    </motion.div>
  );
}

export default Protfolio;