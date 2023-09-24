import { cache } from "../utils/cache";

export async function setEntityPage(page, entity) {
  const url = `https://swapi.dev/api/${entity}?page=${page}`;
  if (url in cache) return cache[url];

  const response = await fetch(url);
  const json = await response.json();

  cache[url] = json;
  return cache[url];
}
