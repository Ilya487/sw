import { cache } from "./cache";

export const makeConcurrentRequest = async (urls) => {
  await cache.initialize();

  const result = [];

  const requests = [];
  urls.forEach((url) => {
    if (!cache.storage[url]) requests.push(fetch(url));
    else result.push(cache.storage[url]);
  });

  const responses = await Promise.allSettled(requests);

  for await (let response of responses) {
    if (response.value) {
      const url = response.value.url;
      cache.storage[url] = await response.value.json();
      result.push(cache.storage[url]);
    } else {
      result.push(response);
    }
  }

  return result;
};
