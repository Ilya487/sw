export function getPersonImg(personURL) {
  const number = +[...personURL].filter((c) => Number.isInteger(+c)).join("");
  return `https://starwars-visualguide.com/assets/img/characters/${number}.jpg`;
}
