import { cache } from "../utils/cache";

export function searchEntity() {
  let controller;
  let signal;

  return async function (query, entity, page) {
    await cache.initialize();

    if (controller) controller.abort();

    query = query.trim();
    if (!query) return {};

    controller = new AbortController();
    signal = controller.signal;

    const url = `https://swapi.dev/api/${entity}/?search=${query}&page=${page}`;

    if (cache.storage.search.query == query) {
      if (cache.storage.search[url]) return cache.storage.search[url];
    } else {
      cache.storage.search = {};
      cache.storage.search.query = query;
    }

    const response = await fetch(url, { signal });
    const json = await response.json();

    cache.storage.search[url] = json;

    return cache.storage.search[url];
  };
}
