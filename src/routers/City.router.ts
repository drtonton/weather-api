import express from 'express';
import { findCities } from '../controllers/City.controller';

const CityRouter = express.Router();

// todo: need error handling here
CityRouter.get('/', (req, res) => {
  // http://localhost:8000/city?name=london
  const name: string = req.query.name as string;
  const response = findCities(name);
  res.send(response);
});

export default CityRouter;