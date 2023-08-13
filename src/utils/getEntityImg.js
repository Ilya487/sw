import { getEntityNumber } from "./getEntityNumber";

export function getEntityImg(personURL, entity) {
  const number = getEntityNumber(personURL);
  return `https://starwars-visualguide.com/assets/img/${
    entity == "people" ? "characters" : entity
  }/${number}.jpg`;
}
