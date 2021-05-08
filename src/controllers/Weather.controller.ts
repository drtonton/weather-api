import { getCurrentWeather } from '../services/Weather.service';
import shapeWeatherData from '../shapers/Weather.shapers';

interface TestResponse {
  message: string;
}

// export default class WeatherController { // turn this into a regular fn
//   public async getWeatherForLocation(cityId: string) {
//     const bro: any = await getCurrentWeather(cityId);
//     return bro;
//   }
// }

export async function getWeatherForLocation(cityId: string) {
  const weatherData = await getCurrentWeather(cityId);
  const formattedWeatherData = shapeWeatherData(weatherData);
  return formattedWeatherData;
}