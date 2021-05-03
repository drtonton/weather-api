const cityList = require('../../city.list.json');

export function findCityMatches(partialName: string) {
  return cityList.filter((city: any) => city.name.includes(partialName));
}