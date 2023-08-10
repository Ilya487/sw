export function getEntityImg(personURL, entity) {
  const number = +[...personURL].filter((c) => Number.isInteger(+c)).join("");
  return `https://starwars-visualguide.com/assets/img/${entity}/${number}.jpg`;
}
