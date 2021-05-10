import { OWData, ShapedWeatherData } from '../common/types';
import { getCurrentWeather } from '../services/Weather.service';
import shapeWeatherData from '../shapers/Weather.shapers';

export async function getWeatherForLocation(cityId: string): Promise<ShapedWeatherData> {
  try {
    const weatherData: OWData = await getCurrentWeather(cityId);
    const formattedWeatherData = shapeWeatherData(weatherData);
    return formattedWeatherData;
  } catch(err) {
    throw err;
  }

}