import React, { useEffect } from "react";
import GamesDetails from "../components/GamesDetails";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const GameSection = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { homeNewGames, homeUpcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {homeUpcomingGames.map((game) => (
          <Game
            name={game.name}
            id={game.id}
            image={game.background_image}
            key={game.ids}
          />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {homeNewGames &&
          homeNewGames.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 8rem;
  h2 {
    text-align: center;
    padding: 1rem;
    padding: 1rem 0rem;
  }
`;

const Games = styled(motion.div)`
  height: 50vh;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export default GameSection;
