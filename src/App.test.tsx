import CityRouter from './routers/City.router';
import WeatherRouter from './routers/Weather.router';
import { findCities } from './controllers/City.controller';
import { getWeatherForLocation } from './controllers/Weather.controller';

import { findCityMatches } from './services/City.service';

describe(' functions', () => {
  test('findCityMatches() things', () => {
    const results = findCityMatches('Ab');
    expect(results).toBeDefined();
  });
})
