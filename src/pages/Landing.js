import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import { pageAnimation } from "../animation";

const Landing = () => {
  const [element, controls] = useScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { homeNewGames, homeUpcomingGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <>
      <Nav />
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <AboutSection />
        <GameList>
          {searched.length ? (
            <div className="searched">
              <h2>Searched Games</h2>
              <Games>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    genres={game.genres}
                  />
                ))}
              </Games>
            </div>
          ) : (
            ""
          )}
          <h2>Upcoming Games</h2>
          <Games>
            {homeUpcomingGames.map((game) => (
              <Game
                name={game.name}
                id={game.id}
                image={game.background_image}
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
                />
              ))}
          </Games>
          <ScrollTop />
        </GameList>
      </motion.div>
    </>
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
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

export default Landing;
