import React, { useEffect } from "react";
import GamesDetails from "../components/GamesDetails";
import { useDispatch, useSelector } from "react-redux";
import { loadGamesForGenre } from "../actions/gamesActions";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";

const TITLES_CONFIG = {
  action: "Action",
  shooter: "Shooter",
  puzzle: "Puzzle",
  default: "Games",
};

const GameGenre = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { genre: genreType } = useParams();

  const pathId = location.pathname.split("/")[2];

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
    <GameList>
      {pathId && <GamesDetails pathId={pathId} />}
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
                key={game.ids}
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
              key={game.ids}
              genres={game.genres}
            />
          ))}
      </Games>
    </GameList>
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
