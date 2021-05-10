export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
}
export interface OWData {
  main: Main;
  weather: Weather[];
}

export interface ShapedWeatherData {
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
