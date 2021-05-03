import express from 'express';
import WeatherController from '../controllers/Weather.controller';

const WeatherRouter = express.Router();

WeatherRouter.get('/', async (req, res) => {
  const controller = new WeatherController();
  const cityId: string = req.query.cityId as string;
  const weatherData = await controller.getWeatherForLocation(cityId);
  console.log('weatherData: ', weatherData);
  return res.send(weatherData);
});

export default WeatherRouter;