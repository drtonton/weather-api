import { findCityMatches } from '../services/City.service';

export function findCities(partialName: string) {
  try {
    const firstTenMatches = findCityMatches(partialName).slice(0, 10);
    // shape here... but shape what
    return firstTenMatches;
  } catch (err) {
    console.log('ERROR', err);
  }
}