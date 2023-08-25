export const makeConcurrentRequest = (urls) => {
  return Promise.all(
    urls.map((url) => {
      return fetch(url).then((response) => response.json());
    })
  );
};
