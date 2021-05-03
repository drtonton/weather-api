const axios = require('axios').default;

// const url: string = `api.openweathermap.org/data/2.5/weather?q=London&appid={API key}`;

export async function getWeatherData(location:string) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    console.log('PICLES', response);
  } catch (err) {
    console.log('THERE WAS AN ERROR', err);
  }
}
