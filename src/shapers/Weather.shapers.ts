import { OWData, Weather, Main, ShapedWeatherData } from '../common/types';

function kelvinToCelsius(number: number): number {
  return Math.floor(number - 273);
}

function kelvinToFahrenheit(number: number): number {
  return Math.floor(1.8 * (number - 273) + 32);
}

export default function shapeWeatherData(weatherData: OWData): ShapedWeatherData {
  const { weather, main }: { weather: Weather[], main: Main } = weatherData;
  const { temp_max, temp_min, feels_like, temp }: { temp_max: number, temp_min: number, feels_like: number, temp: number } = main;
  const generalData = weather[0];
  const descriptionIconUrl = `http://openweathermap.org/img/w/${generalData.icon}.png`;
  const formattedData = {
    generalDescription: generalData.description,
    descriptionIconUrl,
    hiTempFahr: kelvinToFahrenheit(temp_max),
    hiTempCels: kelvinToCelsius(temp_max),
    loTempFahr: kelvinToFahrenheit(temp_min),
    loTempCels: kelvinToCelsius(temp_min),
    feelsLikeFahr: kelvinToFahrenheit(feels_like),
    feelsLikeCels: kelvinToCelsius(feels_like),
    currentTempFahr: kelvinToFahrenheit(temp),
    currentTempCels: kelvinToCelsius(temp)
  };

  return formattedData;
}