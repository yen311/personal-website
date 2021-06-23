import React from "react";
import PortfolioContent from "../components/Portfolio/PortfolioContent";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import { motion } from "framer-motion";

function Protfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <PortfolioContent />
      <Image />
      <About pages="portfolio" />
      <Footer />
    </motion.div>
  );
}

export default Protfolio;
