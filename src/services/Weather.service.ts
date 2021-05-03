const axios = require('axios').default;

export async function getCurrentWeather(location:string) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    console.log('PICLES', response.data);
  } catch (err) {
    console.log('THERE WAS AN ERROR', err);
  }
}
