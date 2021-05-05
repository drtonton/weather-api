import express from 'express';
import { getWeatherForLocation } from '../controllers/Weather.controller';

const WeatherRouter = express.Router();

WeatherRouter.get('/', async (req, res) => {
  const cityId: string = req.query.cityId as string;
  const weatherData = await getWeatherForLocation(cityId);
  console.log('weatherData: ', weatherData);
  return res.send(weatherData);
});

export default WeatherRouter;