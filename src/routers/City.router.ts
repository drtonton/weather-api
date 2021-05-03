import express from 'express';
import { findCities } from '../controllers/City.controller';

const CityRouter = express.Router();

CityRouter.get('/', (_req, res) => {
  const name: string = _req.query.name as string;
  const response = findCities(name);
  // console.log('after snoop', response);
  return res.send(response);
});

export default CityRouter;