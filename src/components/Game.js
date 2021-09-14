import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, image, id }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>

      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 10%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 1rem 1rem;

  img {
    width: 90%;
    height: 40vh;
    object-fit: cover;
    border: solid 5px black;
  }
`;

export default Game;
