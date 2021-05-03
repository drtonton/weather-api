const axios = require('axios').default;

const cityList = require('../../city.list.json');



export async function getCurrentWeather(location:string) {
  try {
    const filtered = cityList.filter((city: any) => city.name.includes('London'));
    console.log('woop woop', filtered);
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    console.log('PICLES', response.data);
  } catch (err) {
    console.log('THERE WAS AN ERROR', err);
  }
}
