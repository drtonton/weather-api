import { OWData, ShapedWeatherData } from '../common/types';
import { getCurrentWeather } from '../services/Weather.service';
import shapeWeatherData from '../shapers/Weather.shapers';

interface TestResponse {
  message: string;
}

export async function getWeatherForLocation(cityId: string): Promise<ShapedWeatherData> {
  const weatherData: OWData = await getCurrentWeather(cityId);
  const formattedWeatherData = shapeWeatherData(weatherData);
  return formattedWeatherData;
}