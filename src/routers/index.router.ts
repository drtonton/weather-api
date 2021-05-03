import express from 'express';

import CityRouter from './City.router';
import WeatherRouter from './Weather.router';

const Router = express.Router();

Router.use('/weather', WeatherRouter);
Router.use('/city', CityRouter);

export default Router;