import React from "react";
import AboutSection from "../components/AboutSection";
import GameSection from "../components/GameSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Landing = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <GameSection />
    </motion.div>
  );
};

export default Landing;
