import { cache } from "./cache";

let controllers = {};

export const makeConcurrentRequest = async (urls) => {
  await cache.initialize();
  const result = [];

  const requests = [];
  urls.forEach((url) => {
    if (!cache.storage[url]) {
      const controller = new AbortController();
      const signal = controller.signal;
      controllers[url] = controller;

      requests.push(
        fetch(url, { signal }).then((response) => {
          delete controllers[response.url];
          return response;
        })
      );
    } else result.push(cache.storage[url]);
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

export const abortAllRequests = () => {
  for (let key in controllers) controllers[key].abort();
  controllers = {};
};
