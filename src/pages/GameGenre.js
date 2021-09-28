import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGamesForGenre } from "../actions/gamesActions";
import NavSearch from "../components/NavSearch";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

const TITLES_CONFIG = {
  action: "Action",
  shooter: "Shooter",
  puzzle: "Puzzle",
  default: "Games",
};

const GameGenre = () => {
  const dispatch = useDispatch();

  const { genre: genreType } = useParams();

  useEffect(() => {
    dispatch(loadGamesForGenre(genreType));
  }, [dispatch, genreType]);

  const gamesByGenre = useSelector((state) => {
    const gamesIds = state.games.genres[genreType];
    if (!Array.isArray(gamesIds)) return [];
    return gamesIds.map((gameId) => {
      return state.games.games[gameId];
    });
  });

  const searched = useSelector((state) => state.games.searched);

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
                  released={game.released}
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
        <h2>{TITLES_CONFIG[genreType] || TITLES_CONFIG.default}</h2>
        <Games>
          {gamesByGenre &&
            gamesByGenre.map((game) => (
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

export default GameGenre;
