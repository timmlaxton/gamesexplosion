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
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
const lastYear = `${currentDay}-${currentMonth}-${currentYear - 1}`;
const nextYear = `${currentDay}-${currentMonth}-${currentYear + 1}`;

const api_key = "467f9538673a42bbb267831f681d3772";

const popular_games = `games?key=${api_key}&dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?key=${api_key}&dates${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
