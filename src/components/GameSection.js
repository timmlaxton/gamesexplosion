import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const GameSection = () => {
  const [element, controls] = useScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { homeNewGames, homeUpcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fade} animate={controls} initial="hidden" ref={element}>
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
              key={game.ids}
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
