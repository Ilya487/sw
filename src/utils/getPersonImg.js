export function getPersonImg(persoURL) {
  const number = +[...persoURL].filter((c) => Number.isInteger(+c)).join("");
  return `https://starwars-visualguide.com/assets/img/characters/${number}.jpg`;
}
