import React from "react";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import ResumeContent from "../components/Rseume/ResumeContent";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ResumeContent />
      <Image />
      <About pages="resume" />
      <Footer />
    </motion.div>
  );
}

export default Resume;
