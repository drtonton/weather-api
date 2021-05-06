import express from 'express';
import { findCities } from '../controllers/City.controller';

const CityRouter = express.Router();

CityRouter.get('/', (req, res) => {
  // http://localhost:8000/city?name=london
  const name: string = req.query.name as string;
  const response = findCities(name);
  if (true) {
    console.log('dogs');
    res.send(response);
  }
});

export default CityRouter;