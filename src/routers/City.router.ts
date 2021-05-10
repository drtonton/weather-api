import express from 'express';
import { findCities } from '../controllers/City.controller';

const CityRouter = express.Router();

CityRouter.get('/', (req, res) => {
  const name: string = req.query.name as string;
  const cities = findCities(name);
  res.send(cities);
});

export default CityRouter;