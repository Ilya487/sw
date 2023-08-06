export function getEntityNumber(url) {
  return +[...url].filter((c) => Number.isInteger(+c)).join("");
}
