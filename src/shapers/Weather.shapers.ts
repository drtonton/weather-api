interface OWData {
  main: Main;
  weather: Weather[];
}

interface ShapedWeatherData {
  generalDescription: string;
  descriptionIconUrl: string;
  hiTempFahr: number;
  loTempFahr: number;
  feelsLikeFahr: number;
  currentTempFahr: number;
  hiTempCels: number;
  loTempCels: number;
  feelsLikeCels: number;
  currentTempCels: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  description: string;
  icon: string;
}

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

  const formattedData = {
    generalDescription: generalData.description,
    descriptionIconUrl: `http://openweathermap.org/img/w/${generalData.icon}.png`,
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