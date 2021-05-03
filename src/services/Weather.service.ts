const axios = require('axios').default;

// todo: interfaces may not need to be formatted like this. can be empty objects? revisit this. for now, you are getting back all data (isn't being shaped)
// scratch that ^ the interfaces ain't doing shit. still revisit and consider imposing a shape on this data before returning to FE.
interface Weather {
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface OpenWeatherReport {
  weather: Weather;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  sys: Sys;
}

export async function getCurrentWeather(location:string) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    const weatherReport = response.data;
    return weatherReport;
  } catch (err) {
    console.log('THERE WAS AN ERROR', err); // todo: create some standarized errors
  }
}
