const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  homeNewGames: [],
  homeUpcomingGames: [],
  gamesGenre: [],
  searched: [],
  games: {},
  genres: {},
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GAMES_BY_GENRE":
      const newState = {
        ...state,
        games: {
          ...state.games,
        },
        genres: {
          ...state.genres,
        },
      };

      const { games } = action.payload;
      games.forEach((game) => {
        const { id: gameId, genres } = game;
        genres.forEach((genre) => {
          const { slug } = genre;
          if (!(slug in newState.genres)) {
            newState.genres[slug] = [];
          }

          if (!newState.genres[slug].includes(gameId)) {
            newState.genres[slug] = [...newState.genres[slug], gameId];
          }
        });
        newState.games[gameId] = game;
      });

      return newState;
    case "FETCH_GAMES":
      const fetchedGames = {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        homeUpcomingGames: action.payload.homeUpcomingGames,
        homeNewGames: action.payload.homeNewGames,
        gameGenre: action.payload.gameGenre,
      };

      return fetchedGames;
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
