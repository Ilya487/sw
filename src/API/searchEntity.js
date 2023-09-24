import { cache } from "../utils/cache";

export function searchEntity() {
  let controller;
  let signal;

  return async function (query, entity, page) {
    if (controller) controller.abort();

    controller = new AbortController();
    signal = controller.signal;

    if (!query) return;

    const url = `https://swapi.dev/api/${entity}/?search=${query}&page=${page}`;

    if (cache.search.query == query) {
      if (cache.search[url]) return cache.search[url];
    } else {
      cache.search = {};
      cache.search.query = query;
    }

    const response = await fetch(url, { signal });
    const json = await response.json();

    cache.search[url] = json;

    return cache.search[url];
  };
}
