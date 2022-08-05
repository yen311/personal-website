import React from "react";
import ProjectContent from "../components/Project/ProjectContent";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import { motion } from "framer-motion";

const PorjectPage = ({ data }) => {
  return (
    <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProjectContent data={data} />
      <Image />
      <About pages='portfolio' />
      <Footer />
    </motion.div>
  );
};

export default PorjectPage;
