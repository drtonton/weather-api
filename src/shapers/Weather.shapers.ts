interface OWData {
  main: Main;
  weather: Weather[];
}

interface ShapedWeatherData {
  generalDescription: string;
  descriptionIconUrl: string;
  hiTemp: number;
  loTemp: number;
  feelsLike: number;
  currentTemp: number;
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

export default function shapeWeatherData(weatherData: OWData): ShapedWeatherData {
  const { weather, main }: { weather: Weather[], main: Main } = weatherData;
  const generalData = weather[0];

  const formattedData = {
    generalDescription: generalData.description,
    descriptionIconUrl: `http://openweathermap.org/img/w/${generalData.icon}.png`,
    hiTemp: main.temp_max,
    loTemp: main.temp_min,
    feelsLike: main.feels_like,
    currentTemp: main.temp
  };

  return formattedData;
}