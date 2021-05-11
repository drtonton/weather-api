import CityRouter from './routers/City.router';
import WeatherRouter from './routers/Weather.router';
import { findCities } from './controllers/City.controller';
import { getWeatherForLocation } from './controllers/Weather.controller';

import { getCurrentWeather } from './services/Weather.service';
import { findCityMatches } from './services/City.service';

describe('City.service.findCityMatches()', () => {
  test('should return matches with a valid input', () => {
    const results = findCityMatches('Denver');
    expect(results).toBeDefined();
    expect(typeof results[0].name).toEqual('string');
    expect(typeof results[0].id).toEqual('number');
    expect(typeof results[0].country).toEqual('string');
  });

  /* This is actually intentional behavior. Validating against special chars and numbers was considered,
  but there are actually a wide variety of special chars and numbers included in city names. */
  test('should return an empty array with an invalid input/if no matches exist', () => {
    const results = findCityMatches('_-_-_--_---123');
    expect(results).toEqual([]);
  });
})
