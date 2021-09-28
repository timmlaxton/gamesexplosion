import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import NavSearch from "../components/NavSearch";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  const [element, controls] = useScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <>
      <NavSearch />
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
          {upcoming.map((game) => (
            <Game
              variants={fade}
              animate={controls}
              initial="hidden"
              ref={element}
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
              genres={game.genres}
            />
          ))}
        </Games>

        <h2>Popular</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
              genre={game.genres}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames &&
            newGames.map((game) => (
              <Game
                name={game.name}
                id={game.id}
                image={game.background_image}
                key={game.id}
                genres={game.genres}
              />
            ))}
        </Games>
        <ScrollTop />
      </GameList>
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    text-align: center;
    padding: 2rem;
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

export default Home;
