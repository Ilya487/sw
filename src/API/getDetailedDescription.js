import { cache } from "../utils/cache";

export async function getDetailedDescription(id, entity) {
  const url = `https://swapi.dev/api/${entity}/${id}`;

  if (url in cache) return cache[url];

  const response = await fetch(url);
  const json = response.json();

  cache[url] = json;

  return cache[url];
}
