import React from "react";
import ContactContent from "../components/Contact/ContactContent";
import Image from "../components/Common/Image";
import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ContactContent />
      <Image />
      <About pages="contact" />
      <Footer />
    </motion.div>
  );
}

export default Contact;
