import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
  gameGenreURL,
} from "../api";

export const loadGamesForGenre =
  (genres = []) =>
  async (dispatch) => {
    const response = await axios.get(gameGenreURL(genres));
    dispatch({
      type: "UPDATE_GAMES_BY_GENRE",
      payload: {
        games: response.data.results,
      },
    });
  };

export const loadGames = () => async (dispatch) => {
  const popularDataPromise = axios.get(popularGamesURL());
  const newGamesDataPromise = axios.get(newGamesURL());
  const upcomingDataPromise = axios.get(upcomingGamesURL());
  const gameGenreDataPromise = axios.get(gameGenreURL());

  const [popularData, newGamesData, upcomingData, gameGenreData] =
    await Promise.all([
      popularDataPromise,
      newGamesDataPromise,
      upcomingDataPromise,
      gameGenreDataPromise,
    ]);

  console.log("games", {
    popularData,
    newGamesData,
    upcomingData,
    gameGenreData,
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
      gameGenre: gameGenreData.data.results,
    },
  });
};

// export const loadGenre = () => async (dispatch) => {
//   const gameGenreData = await axios.get(gameGenreURL());

//   dispatch({
//     type: "FETCH_GAMES_GENRE",
//     payload: {
//       gameGenre: gameGenreData.data.results,
//     },
//   });
// };

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
