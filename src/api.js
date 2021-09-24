const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const api_key = "68d11502c5e84e48a19bf51159c89c65";

const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;
const gameGenre = `games?key=${api_key}&genres=`;
const home_upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=3`;
const home_new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=3`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const homeUpcomingGamesURL = () => `${base_url}${home_upcoming_games}`;
export const homeNewGamesURL = () => `${base_url}${home_new_games}`;
export const gameGenreURL = (genres) => {
  let genresParam = genres;

  if (Array.isArray(genres)) {
    genresParam = genres.join(",");
  }

  return `${base_url}${gameGenre}${genresParam}`;
};

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${api_key}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&.josn?&key=${api_key}`;
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${api_key}&search=${game_name}&page_size=10`;
