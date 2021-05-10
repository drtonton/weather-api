const axios = require('axios').default;

import { OWData } from '../common/types';

export async function getCurrentWeather(location:string): Promise<OWData> {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    const weatherReport: OWData = response.data;
    return weatherReport;
  } catch (err) {
    throw(err);
  }
}
