import { cache } from "../utils/cache";

export async function setEntityPage(page, entity) {
  await cache.initialize();

  const url = `https://swapi.dev/api/${entity}?page=${page}`;
  if (url in cache.storage) return cache.storage[url];

  const response = await fetch(url);
  const json = await response.json();

  cache.storage[url] = json;
  return cache.storage[url];
}
