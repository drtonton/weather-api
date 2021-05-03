import express from 'express';
import WeatherController from '../controllers/Weather.controller';

const WeatherRouter = express.Router();

WeatherRouter.get('/', async (_req, res) => {
  const controller = new WeatherController();
  const response = await controller.getWeatherForLocation();
  console.log('response: ', response);
  return res.send(response);
});

export default WeatherRouter;