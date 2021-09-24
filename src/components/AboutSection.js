import React from "react";
import home from "../img/island1.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>
              Everything was <span>beautiful</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              nothing <span>hurt</span>{" "}
            </motion.h2>
          </Hide>

          <br />
          <motion.h1>A site about games</motion.h1>
        </motion.div>
      </Description>
      <Image>
        <img src={home} alt="camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
