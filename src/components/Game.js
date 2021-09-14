import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";

const Game = ({ name, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>

      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 10%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 1rem;
  padding: 1rem 1rem;

  img {
    width: 90%;
    height: 40vh;
    object-fit: cover;
    border-radius: 1rem;
    border: solid 5px black;
  }
`;

export default Game;
