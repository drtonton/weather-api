import express from 'express';

import WeatherRouter from './Weather.router';

const router = express.Router();

router.use('/weather',
  WeatherRouter);