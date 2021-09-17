const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
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
      // First we need to loop through the games, as we need to get access to genres
      games.forEach((game) => {
        const { id: gameId, genres } = game;
        // Loop through genres and push game's ID to each of its genres in the state
        genres.forEach((genre) => {
          const { slug } = genre;
          // If this genre is not in the state yet, create a new array for it
          if (!(slug in newState.genres)) {
            newState.genres[slug] = [];
          }

          // Check if this game is already not included in this genre
          // If it isn't in the state, then add it
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
        gameGenre: action.payload.gameGenre,
      };

      console.log("fetched games", fetchedGames);
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
