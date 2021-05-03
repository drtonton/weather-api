const cityList = require('../../city.list.json');

export function findCityNameMatches(partialName: string) {
  return cityList.filter((city: any) => city.name.includes(partialName));
}