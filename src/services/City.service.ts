import { City } from "../common/types";

const cityList = require('../../city.list.json');

export function findCityMatches(partialName: string): City[] {
  return cityList.filter((city: any) => city.name.includes(partialName));

}