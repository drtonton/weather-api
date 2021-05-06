import { findCityMatches } from '../services/City.service';

export function findCities(partialName: string) {
  try {
    return findCityMatches(partialName);
  } catch (err) {
    console.log('ERROR', err);
  }
}