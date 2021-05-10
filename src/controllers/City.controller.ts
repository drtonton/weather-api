import { findCityMatches } from '../services/City.service';

export function findCities(partialName: string) {
  try {
    const firstTenMatches = findCityMatches(partialName).slice(0, 10);
    return firstTenMatches;
  } catch (err) {
    console.log('ERROR', err);
  }
}