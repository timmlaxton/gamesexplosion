import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";
import { Link } from "react-router-dom";

const Game = ({ name, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  background-color: #000;
  min-height: 5%;
  width: 90%;
  margin-left: 1px;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4); */
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem 1rem;
  overflow: hidden;
  color: #fff;
  text-decoration: none;

  img {
    width: 90%;
    height: 40vh;
    object-fit: cover;
    border-radius: 1rem;
    border: solid 5px black;
  }
`;

export default Game;
