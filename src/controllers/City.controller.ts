import { findCityMatches } from '../services/City.service';

export function findCities(partialName: string) {
  return findCityMatches(partialName);
}