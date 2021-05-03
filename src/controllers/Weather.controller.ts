import { getWeatherData } from '../services/Weather.service';

interface TestResponse {
  message: string;
}

export default class WeatherController { // turn this into a regular fn
  public async getWeatherForLocation(): Promise<TestResponse> {
    const bro = await getWeatherData('hi im a locatin');
    return {
      message: 'beep boop!',
    };
  }
}