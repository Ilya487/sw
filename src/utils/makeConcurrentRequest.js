import { cache } from "./cache";

export const makeConcurrentRequest = async (urls) => {
  const result = [];

  const requests = [];
  urls.forEach((url) => {
    if (!cache[url]) requests.push(fetch(url));
    else result.push(cache[url]);
  });

  const responses = await Promise.allSettled(requests);

  for await (let response of responses) {
    if (response.value) {
      const url = response.value.url;
      cache[url] = await response.value.json();
      result.push(cache[url]);
    } else {
      result.push(response);
    }
  }

  return result;
};
