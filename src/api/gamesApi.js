import api from "./api";

const api_key = "68d11502c5e84e48a19bf51159c89c65";

export const gamesByGenre = (genres) => {
  let genresParam = genres;

  if (Array.isArray(genres)) {
    genresParam = genres.join(",");
  }
  return api.get("games", {
    params: {
      key: api_key,
      genres: genresParam,
    },
  });
};
