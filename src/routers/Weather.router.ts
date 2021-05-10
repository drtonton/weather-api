import express from 'express';
import { ShapedWeatherData } from '../common/types';
import { getWeatherForLocation } from '../controllers/Weather.controller';

const WeatherRouter = express.Router();

WeatherRouter.get('/', async (req, res) => {
  const cityId: string = req.query.cityId as string;
  const weatherData: ShapedWeatherData = await getWeatherForLocation(cityId);
  return res.send(weatherData);
});

export default WeatherRouter;