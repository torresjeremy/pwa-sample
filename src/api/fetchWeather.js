
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
  const response = await fetch(`${URL}?` + new URLSearchParams({
    q: query,
    units: 'metric',
    APPID: API_KEY
  }));
  return response.json();
};