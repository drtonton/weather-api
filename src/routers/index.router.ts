import express from 'express';

import WeatherRouter from './Weather.router';

const Router = express.Router();

Router.use('/weather',
  WeatherRouter);

export default Router;