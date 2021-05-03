import { getCurrentWeather } from '../services/Weather.service';

interface TestResponse {
  message: string;
}

export default class WeatherController { // turn this into a regular fn
  public async getWeatherForLocation(cityId: string) {
    const bro: any = await getCurrentWeather(cityId);
    return bro;
  }
}